import BlogModel from "./BlogModel"

const blogs = [
  { id: 1, title: 'Title1', description: 'Description 1 lorem pixel losus erprie sekjrn' },
  { id: 2, title: 'Title2', description: 'Description 2' },
  { id: 3, title: 'Title3', description: 'Description 3' },
  { id: 4, title: 'Title4', description: 'Description 4' },
  { id: 5, title: 'Title5', description: 'Description 5' },
]
const BlogService = {
  async getBlog() {
    return BlogModel.fromAll(blogs)
  },
  getBlogById(id) {
    const currentBlog = blogs.find(blog => blog.id == id)
    return BlogModel.from(currentBlog)
  }
}
export default BlogService;