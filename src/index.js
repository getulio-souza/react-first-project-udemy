import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Marilyn Sadler",
    title: "It's Not Easy Being a Bunny: An Easter Book for Kids",
    img: "https://m.media-amazon.com/images/I/71ihGxMQEBL._SL1500_.jpg",
    id: 1,
  },

  {
    author: "Freida McFadden",
    title: "The Housemaid",
    img: "https://m.media-amazon.com/images/I/81AHTyq2wVL._SL1500_.jpg",
    id: 2,
  },
];

const BookList = () => {

  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <section className="booklist">
      <EventExamples/>
      {books.map((book) => {
        // console.log(book)
        return (
          <Book {...book} key={book.id} getBook={getBook} />
        )
      })}
    </section>
  );
};

const EventExamples = () => {

  const handleFormInput = (e) => {
    console.log("handle form input")
    console.log(e.target.name)
    console.log(e.target.value)
  }

  const handleButtonClick = () => {
    alert("handle button click")
  }

  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log("form submitted")
  }

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          placeholder="type your book here"
          style={{ margin: '1rem 0' }}
          onChange={handleFormInput}
        />
      </form>
      <button
        onClick={handleButtonClick}
      >
        click me</button>
    </section>
  )
}




const Book = (props) => {
  const { img, title, author } = props;
  // console.log(props);

  const displayTitle = () => {
  console.log(title)
}

  return (
    <article className="book">
      <img src={img} />
      <p>{title}</p>
      <button onClick={displayTitle}>display title</button>
      <p>{author}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

export default BookList;
