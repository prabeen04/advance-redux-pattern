import { createAction } from "../../store/utils/createAction"
import { GET_BLOGS } from "./BlogActionTypes"
import BlogService from "./BlogService"

export const getBlogs = () => {
  return createAction(GET_BLOGS, () => BlogService.getBlog())
}