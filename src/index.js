import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import  pool from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import errorHandling from "./middleware/errorHandle.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/",userRouter);

app.get("/", async(req, res) => {
  const result = await pool.query("SELECT  current_database()")
  res.send(`The database name is : ${result.rows[0 ].current_database}`);
  // res.send("Hello World!");
});
app.use(errorHandling);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});