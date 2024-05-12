const books = document.querySelector(".books");

const myLibrary = [
  {
    title: "Pimping hoes Degree(PhD)",
    author: "me",
    pages: 500,
    read: true,
  },
  {
    title: "How to be a G",
    author: "Rambo",
    pages: 1,
    read: true,
  },
];

createBookElement = (el, content, className) => {
  const element = document.createElement(el);
  element.textContent = content;
  element.setAttribute("class", className);
  return element;
};

createBookItem = (book, index) => {
  const bookItem = document.createElement("div");
  bookItem.setAttribute("id", index);
  bookItem.setAttribute("key", index);
  bookItem.setAttribute("class", "card book");
  bookItem.appendChild(
    createBookElement("h1", `Title: ${book.title}, "book-title"`)
  );
  bookItem.appendChild(
    createBookElement("h1", `Author: ${book.author}, "book-author"`)
  );
  bookItem.appendChild(
    createBookElement("h1", `Pages: ${book.pages}, "book-pages"`)
  );
  books.insertAdjacentElement("afterbegin", bookItem);
};

renderBooks = () => {
  myLibrary.map((book, index) => {
    createBookItem(book, index);
  });
};


renderBooks();



//tue/14/may
//the off season

//tue/14/may
//the off season
//tue/14/may
//the off season