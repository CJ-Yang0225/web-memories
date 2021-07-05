import { Dispatch } from "redux";
import {
  GET_ALL_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from "../lib/constants";
import * as api from "../lib/api";
import { FormData } from "../types";

export const getAllPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data: allPosts } = await api.getAllPosts();

    dispatch({
      type: GET_ALL_POSTS,
      payload: allPosts,
    });
  } catch (reason) {
    console.error(reason.message);
  }
};

export const createPost = (newPost: FormData) => async (dispatch: Dispatch) => {
  try {
    const { data: createdPost } = await api.createPost(newPost);

    dispatch({
      type: CREATE_POST,
      payload: createdPost,
    });
  } catch (reason) {
    console.error(reason.message);
  }
};

export const updatePost =
  (id: string, editedPost: FormData) => async (dispatch: Dispatch) => {
    try {
      const { data: post } = await api.updatePost(id, editedPost);

      dispatch({
        type: UPDATE_POST,
        payload: post,
      });
    } catch (reason) {
      console.error(reason.message);
    }
  };

export const deletePost = (id: string) => async (dispatch: Dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  } catch (reason) {
    console.error(reason.message);
  }
};
