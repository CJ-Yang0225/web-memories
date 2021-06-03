import { Dispatch } from "redux";
import { GET_ALL_POSTS } from "../constants/actionTypes";
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
