"use server";
import { Post, User } from "./model";
import { connectToDb } from "./util";
import bcrypt from "bcrypt";

import mongoose from "mongoose";

import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {
  "use server";

  const { title, desc, slug, userId, img } = formData;

  console.log("formData: ", title, desc, slug, userId, img);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    /// revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  try {
    const { username, password } = Object.fromEntries(formData);
    // Ensure the database connection
    await connectToDb();
    console.log("Into login");

    // Check if Mongoose is connected
    if (mongoose.connection.readyState !== 1) {
      throw new Error("Database not connected");
    }

    // Find the user and convert to plain object
    const user = await User.findOne({ username }).lean();

    if (!user) return { error: "Wrong credentials!" };

    console.log("Login: successfully");
    return { user: "successfully login", isLogin: true }; // No need to serialize if you used .lean()
  } catch (err) {
    console.error("Login failed", err.message); // Log only the message
    throw err; // Re-throw the error to handle it in the component
  }
};
export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
