import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
async function connect() {
  await mongoose.connect(process.env.DB_URL);
  console.log("mongodb connect success");
}

export default connect;
