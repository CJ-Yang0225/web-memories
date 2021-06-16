import axios from "axios";
import { NewPost } from "../actions/posts";

const TEST_URL = "http://localhost:5000/posts";

export const getAllPosts = () => axios.get(TEST_URL);

export const createPost = (newPost: NewPost) => axios.post(TEST_URL, newPost);

export * from "./types";
