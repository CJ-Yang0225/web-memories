import axios from "axios";
import { TEST_URL } from "./constants";
import { FormData } from "../types";

export const getAllPosts = () => axios.get(TEST_URL);

export const createPost = (newPost: FormData) => axios.post(TEST_URL, newPost);

export const updatePost = (id: string, editedPost: FormData) =>
  axios.patch(`${TEST_URL}/${id}`, editedPost);

export const deletePost = (id: string) => axios.delete(`${TEST_URL}/${id}`);
