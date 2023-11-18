import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const BookLibrary = () => {
  const [book, setBook] = useState([
    { name: "Matilda", author: "Roald Dahl" },
    { name: "1984", author: "George Orwell" },
    { name: "The Giver", author: "Lois Lowry" },
    { name: "Brave New World", author: "Aldous Huxley" },
    { name: "The Hobbit", author: "J.R.R. Tolkien" },
  ]);

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
      <div className="p-10">
        <div>
          <h1 className="font-bold text-3xl mb-8">
            Book and Their Author Name:
          </h1>
          <ul>
            {book.map((book, i) => (
              <li
                key={i}
                className="w-1/4 flex justify-between border-2 border-neutral-500 shadow-lg mb-7 p-4 font-bold relative"
              >
                {book.name}{" "}
                <cite className="text-gray-500 font-normal">
                  By {book.author}
                </cite>
                <div className="absolute -top-2 -right-2 text-white bg-red-500 p-1 rounded-full cursor-pointer">
                  <RxCross2 />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookLibrary;
