import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookLibrary = () => {
  const [book, setBook] = useState([
    { name: "Matilda", author: "Roald Dahl" },
    { name: "1984", author: "George Orwell" },
    { name: "The Giver", author: "Lois Lowry" },
    { name: "Brave New World", author: "Aldous Huxley" },
    { name: "The Hobbit", author: "J.R.R. Tolkien" },
  ]);

  const [bookname, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [number, setNumber] = useState(5);
  const [error, setError] = useState(false);

  const addBookAndAuthor = (bookname, author) => {
    const bookExists = book.find((b) => b.name === bookname);

    if (bookExists) {
      toast.error("Book already exists");
      setError(true);
    } else {
      setBook([...book, { name: bookname, author: author }]);
      setNumber(number + 1);
      setBookName("");
      setAuthor("");
    }
  };

  const removeBook = (i) => {
    const updatedBooks = [...book];
    updatedBooks.splice(i, 1);
    setBook(updatedBooks);
    setNumber(number - 1);
  };

  return (
    <div>
      {error ? (
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      ) : null}
      <div className="p-10 h-screen border border-black flex flex-col justify-between">
        {/* BOOKS NAME */}
        <div className="mb-6">
          <h1 className="font-bold text-3xl mb-5">Your Library:</h1>
          <ul className="grid grid-cols-3 gap-y-4 gap-x-2">
            {book.map((book, i) => (
              <li
                key={i}
                className="w-4/5 flex justify-between border-2 border-neutral-500 shadow-lg mb-4 p-4 font-bold relative"
              >
                {book.name}{" "}
                <cite className="text-gray-500 font-normal">
                  By {book.author}
                </cite>
                <button
                  className="absolute -top-2 -right-2 text-white bg-red-500 p-1 rounded-full"
                  onClick={() => {
                    removeBook(i);
                  }}
                >
                  <RxCross2 />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* FORM FOR ADDING BOOK */}
        <div>
          <h1 className="font-bold text-3xl mb-5">Add book to the library:</h1>
          <div className="w-1/4 flex items-center justify-around">
            <div>
              <form>
                <input
                  type="text"
                  placeholder="Book's Name..."
                  className="border border-gray-500 rounded-md px-4 py-2 mb-3"
                  value={bookname}
                  onChange={(e) => {
                    setBookName(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="Authors's Name..."
                  className="border border-gray-500 rounded-md px-4 py-2"
                  value={author}
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                />
              </form>
            </div>

            <button
              className="border bg-green-500 hover:bg-green-600 hover:scale-105 h-full rounded-full text-white text-4xl p-5"
              onClick={() => addBookAndAuthor(bookname, author)}
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookLibrary;
