import { useState } from "react";
import { useBookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const { addBook } = useBookContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !year) {
      alert("Please fill in all fields.");
      return;
    }

    const newBook = {
      title,
      author,
      year: parseInt(year),
    };

    addBook(newBook);
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <div className="bg-[#f3f3f3] min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#4b3f72] mb-8">
          Add a New Book
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 rounded-md border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b3f72]"
          />
          <input
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="p-3 rounded-md border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b3f72]"
          />
          <input
            type="number"
            placeholder="Year Published"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="p-3 rounded-md border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b3f72]"
          />
          <button
            type="submit"
            className="py-3 px-6 bg-[#4b3f72] text-white font-semibold rounded-md hover:bg-[#6d5c9e] transition-all"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
