import { STATES } from "../../store/rootReducer";

export const selectAllBlogs = state => state[STATES.BLOG].list
