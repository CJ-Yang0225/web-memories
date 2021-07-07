import {
  CREATE_POST,
  DELETE_POST,
  GET_ALL_POSTS,
  LIKE_POST,
  UPDATE_POST,
} from "../lib/constants";
import { Post } from "../types";

type Action = {
  type: string;
  payload: any;
};

const reducer = (posts: Post[] = [], action: Action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return action.payload;

    case CREATE_POST:
      return [...posts, action.payload];

    case UPDATE_POST:
    case LIKE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case DELETE_POST:
      return posts.filter((post) => post._id !== action.payload);

    default:
      return posts;
  }
};

export default reducer;
