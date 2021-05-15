import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts";

dotenv.config();

const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const URI = process.env.MONGODB_CONNECTION_URI || "";
const PORT = process.env.PORT || 5000;

app.use("/posts", postRoutes);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log("Server is running on port:", PORT))
  )
  .catch((error) => console.error(`${error} did not connect!`));

mongoose.set("useFindAndModify", false);
