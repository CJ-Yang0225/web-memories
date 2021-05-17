import express from "express";
import { getPosts, createPost } from "../controllers/posts";

const router = express.Router();

router.get("/", getPosts);
router.post("/create", createPost);
router.patch("/:id", () => console.log("do something"));

export default router;
