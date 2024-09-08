export default class Book {
  constructor(title, author, pages, status, score) {
    this.json = this.convertJSON(title, author, pages, status, score);
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.score = score;
  }
  update(data) {
    [this.title, this.author, this.pages, this.status, this.score] = data;
  }
  convertJSON(title, author, pages, status, score) {
    return {
      title,
      author,
      pages,
      status,
      score,
    };
  }
}
