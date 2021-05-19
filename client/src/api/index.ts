import axios from "axios";

const TEST_URL = "http://localhost:5000/posts";

export const getPosts = () => axios.get(TEST_URL);

export * from "./types";
