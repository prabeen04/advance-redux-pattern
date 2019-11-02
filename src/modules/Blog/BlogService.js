import BlogModel from "./BlogModel";

const blogs = [
  {
    id: 1,
    title: "Title1",
    description: "Description 1 lorem pixel losus erprie sekjrn"
  },
  { id: 2, title: "Title2", description: "Description 2" },
  { id: 3, title: "Title3", description: "Description 3" },
  { id: 4, title: "Title4", description: "Description 4" },
  { id: 5, title: "Title5", description: "Description 5" }
];
const timeout = ms => new Promise(r => setTimeout(r, ms));
const BlogService = {
  async getBlog() {
    await timeout(2000);
    return BlogModel.fromAll(blogs);
  },
  async getBlogById(id) {
    await timeout(2000);
    const currentBlog = blogs.find(blog => blog.id == id);
    return BlogModel.from(currentBlog);
  }
};
export default BlogService;
