import { createAction } from "../../store/utils/createAction";
import { GET_BLOGS, GET_BLOG_BY_ID } from "./BlogActionTypes";
import BlogService from "./BlogService";

export const getBlogs = () => {
  return createAction(GET_BLOGS, () => BlogService.getBlog());
};
export const getBlogById = id => {
  return createAction(GET_BLOG_BY_ID, () => BlogService.getBlogById(id));
};
