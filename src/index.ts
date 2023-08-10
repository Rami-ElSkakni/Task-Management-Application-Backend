import express from "express";
import { router as TaskRoutes } from "./routes/TaskRoutes";
require("dotenv").config();
import mongoose from "mongoose";
import cors from 'cors';


const MONGODB_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => console.log("Success"))
  .catch((err) => console.log(err));

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your Next.js frontend URL
}));
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/", TaskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
