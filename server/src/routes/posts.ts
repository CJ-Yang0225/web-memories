import express from "express";
import { getAllPosts, createPost, updatePost } from "../controllers/posts";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);

export default router;
