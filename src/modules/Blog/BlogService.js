import BlogModel from "./BlogModel";

const blogs = [
  {
    id: 1,
    title: "Title1",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
     unknown printer took a galley of type and scrambled it to make a type specimen book. 
     It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of 
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
       software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 2,
    title: "Title2",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
     unknown printer took a galley of type and scrambled it to make a type specimen book. 
     It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of 
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
       software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 3,
    title: "Title3",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
     unknown printer took a galley of type and scrambled it to make a type specimen book. 
     It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of 
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
       software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 4,
    title: "Title4",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
     unknown printer took a galley of type and scrambled it to make a type specimen book. 
     It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of 
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
       software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 5,
    title: "Title5",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
     unknown printer took a galley of type and scrambled it to make a type specimen book. 
     It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of 
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
       software like Aldus PageMaker including versions of Lorem Ipsum.`
  }
];
const timeout = ms => new Promise(r => setTimeout(r, ms));
const BlogService = {
  async getBlog() {
    await timeout(500);
    return BlogModel.fromAll(blogs);
  },
  async getBlogById(id) {
    await timeout(1000);
    const currentBlog = blogs.find(blog => blog.id == id);
    return BlogModel.from(currentBlog);
  },
  async createBlog(data) {
    await timeout(1000);
    blogs.push({ id: blogs.length + 1, ...data });
    return true;
  },
  async updateBlog(id, data) {
    await timeout(500);
    const finalBlog = blogs.map(blog => {
      if (blog.id === id) {
        return { id, ...data };
      }
      return blog;
    });
    return BlogModel.fromAll(finalBlog);
  }
};
export default BlogService;
