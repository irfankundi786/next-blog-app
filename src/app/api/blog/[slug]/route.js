import { Post } from "@/lib/model";
import { connectToDb } from "@/lib/util";
import { NextResponse } from "next/server";

export const GET = async ( { params }) => {
  const { slug } = params;
  try {
    connectToDb();

    const post = await Post.findOne({ slug });
    console.log("single post = *" + post);
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const DELETE = async ( { params }) => {
  const { slug } = params;
  try {
    connectToDb();

    await Post.deleteOne({ slug });
    return NextResponse.json(" post deleted successfully");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};
