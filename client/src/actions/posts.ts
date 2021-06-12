import { Dispatch } from "redux";
import { CREATE_POST, GET_ALL_POSTS } from "../constants/actionTypes";
import * as api from "../api";

export const getAllPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.getAllPosts();

    dispatch({
      type: GET_ALL_POSTS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export type NewPost = {
  creator: string;
  title: string;
  message: string;
  selectedFile: string;
  isFavorite: boolean;
  tags: string[];
};

export const createPost = (newPost: NewPost) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.createPost(newPost);

    dispatch({
      type: CREATE_POST,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
