class BlogModel {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.createdAt = data.createdAt;
    this.author = this.author
  }
  static from(obj) {
    return new BlogModel({
      id: obj.id,
      title: obj.title,
      description: obj.description,
      createdAt: obj.createdAt,
      author: obj.author,
    })
  }
  static fromAll(data) {
    return data.map(d => this.from(d))
  }
}
export default BlogModel;