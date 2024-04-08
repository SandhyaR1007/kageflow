import { error } from "console";
import mongoose from "mongoose";

const connect = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      const connection = mongoose.connection;
      connection.on("connect", () => {
        console.log("Connected to DB");
      });
      connection.on("error", () => {
        console.log("Error occurred while connecting", error);
        process.exit();
      });
    } else {
      throw new Error("Failed to connect to DB");
    }
  } catch (error) {
    console.log("Something went wrong when connecting to DB", error);
  }
};

export default connect;