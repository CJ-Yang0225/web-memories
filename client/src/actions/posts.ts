import { Dispatch } from "redux";
import { CREATE_POST, GET_ALL_POSTS, UPDATE_POST } from "../lib/constants";
import * as api from "../lib/api";
import { FormData } from "../types";

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

export const createPost = (newPost: FormData) => async (dispatch: Dispatch) => {
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

export const updatePost =
  (id: string, editedPost: FormData) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.updatePost(id, editedPost);

      dispatch({
        type: UPDATE_POST,
        payload: data,
      });
    } catch (error) {}
  };
