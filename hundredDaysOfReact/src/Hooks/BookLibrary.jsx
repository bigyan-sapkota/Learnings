import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";

const BookLibrary = () => {
  const [book, setBook] = useState([
    { name: "Matilda", author: "Roald Dahl" },
    { name: "1984", author: "George Orwell" },
    { name: "The Giver", author: "Lois Lowry" },
    { name: "Brave New World", author: "Aldous Huxley" },
    { name: "The Hobbit", author: "J.R.R. Tolkien" },
  ]);

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [number, setNumber] = useState(5);

  const addBook = () => {
    // Check if the book exists
    // If it exists, give error. Else add the book
  };

  const removeBook = () => {
    // Use filter or splice method
  };

  return (
    <div>
      <div className="p-10 h-screen border border-black flex flex-col justify-between">
        {/* BOOKS NAME */}
        <div className="mb-6">
          <h1 className="font-bold text-3xl mb-5">
            Book and Their Author Name:
          </h1>
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
                <button className="absolute -top-2 -right-2 text-white bg-red-500 p-1 rounded-full">
                  <RxCross2 />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* FORM FOR ADDING BOOK */}
        <div>
          <h1 className="font-bold text-3xl mb-5">Add book to the library:</h1>
          <div>
            <form>
              <input
                type="text"
                placeholder="Book's Name..."
                className="border border-gray-500 rounded-md px-4 py-2 mb-3"
              />
              <br />
              <input
                type="text"
                placeholder="Authors's Name..."
                className="border border-gray-500 rounded-md px-4 py-2"
              />
            </form>
          </div>

          <div className="">
            <FiPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookLibrary;
