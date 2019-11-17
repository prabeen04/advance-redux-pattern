import { createAction } from "../../store/utils/createAction";
import {
  GET_BLOGS,
  GET_BLOG_BY_ID,
  CREATE_BLOG,
  UPDATE_BLOG
} from "./BlogActionTypes";
import BlogService from "./BlogService";

export const getBlogs = () => {
  return createAction(GET_BLOGS, () => BlogService.getBlog());
};
export const getBlogById = id => {
  return createAction(GET_BLOG_BY_ID, () => BlogService.getBlogById(id));
};
export const createBlog = data => {
  return createAction(CREATE_BLOG, () => BlogService.createBlog(data));
};

export const updateBlog = (id, data) => {
  return createAction(UPDATE_BLOG, () => BlogService.updateBlog(id, data));
};
