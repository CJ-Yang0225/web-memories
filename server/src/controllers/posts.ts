import mongoose from "mongoose";
import { Request, Response } from "express";
import PostModel from "../models/Post";

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req: Request, res: Response) => {
  const post = req.body;
  const newPost = new PostModel(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { creator, title, message, tags, selectedFile, isFavorite } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }

  const editedPost = {
    creator,
    title,
    message,
    tags,
    selectedFile,
    isFavorite,
  };

  const updatedPost = await PostModel.findByIdAndUpdate(id, editedPost, {
    new: true,
  });

  res.json(updatedPost);
};

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }

  await PostModel.findByIdAndDelete(id);

  res.json({ message: "Post deleted successfully." });
};
