import BlogModel from "./BlogModel"

const blogs = [
  { title: 'Title1', description: 'Description 1 lorem pixel losus erprie sekjrn' },
  { title: 'Title2', description: 'Description 2' },
  { title: 'Title3', description: 'Description 3' },
  { title: 'Title4', description: 'Description 4' },
  { title: 'Title5', description: 'Description 5' },
]
const BlogService = {
  async getBlog() {
    return BlogModel.fromAll(blogs)
  }
}
export default BlogService;