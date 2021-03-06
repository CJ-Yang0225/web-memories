import express from "express";
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likeCount", likePost);

export default router;
