import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    );

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB Error:", err.message);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB Disconnected");
    });

    process.on("SIGINT", async () => {
      await mongoose.connection.close();

      console.log(
        "MongoDB Connection Closed. Server Terminated."
      );

      process.exit(0);
    });
  } catch (error) {
    console.error(
      "Database Connection Failed:",
      error.message
    );

    process.exit(1);
  }
};

export default connectDB;