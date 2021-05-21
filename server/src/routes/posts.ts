import express from "express";
import { getAllPosts, createPost } from "../controllers/posts";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/create", createPost);
router.patch("/:id", () => console.log("do something"));

export default router;
