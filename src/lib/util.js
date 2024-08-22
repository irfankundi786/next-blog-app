import mongoose from "mongoose";
const connection = {};
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connection.readyState === 1;
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't connect to Mongo");
  }
};
