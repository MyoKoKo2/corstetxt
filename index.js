import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import connectDb from "./database/connection/connect.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

// database connect
connectDb();

// api setup json
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
// view
app.set("view engine", "ejs");

// router
app.use("/users", userRoute);

// page not found
app.get("*", (req, res) => {
  res.status(404).render("notfound", { path: req.originalUrl });
});
app.listen(PORT, () => {
  console.log(`server start http://localhost:${PORT}`);
});
