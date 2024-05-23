import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("DB CONNECTED SUCCESSFULLY");
    });
    connection.on("error", (error) => {
      console.log("DB FAILS TO CONNECT: ", error);

      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong while connecting to the DB: ", error);
  }
};

export default connectDb;
