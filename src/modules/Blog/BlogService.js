import BlogModel from "./BlogModel"

const blogs = [
  { title: 'Title1', desc: 'Description 1 lorem pixel losus erprie sekjrn' },
  { title: 'Title2', desc: 'Description 2' },
  { title: 'Title3', desc: 'Description 3' },
  { title: 'Title4', desc: 'Description 4' },
  { title: 'Title5', desc: 'Description 5' },
]
const BlogService = {
  async getBlog() {
    return new BlogModel.fromAll(blogs)
  }
}
export default BlogService;