import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Posts } from "../api";
import reducers from "../reducers";

export default createStore(reducers, compose(applyMiddleware(thunk)));

export type RootState = {
  postsReducer: Posts;
};
