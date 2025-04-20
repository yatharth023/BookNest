import { useState, useEffect } from "react";
import axios from "axios";
import { useBookContext } from "../context/BookContext";

function Home() {
  const { books: userBooks } = useBookContext(); 
  const [books, setBooks] = useState([]);
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://openlibrary.org/subjects/popular_books.json?limit=40")
      .then((res) => {
        setTrendingBooks(res.data.works);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (query) {
      axios.get(`https://openlibrary.org/search.json?q=${query}`)
        .then((res) => {
          setBooks(res.data.docs);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="bg-gradient-to-br from-[#f3f3f3] via-[#e4e4e4] to-[#d6d6d6] min-h-screen text-[#1e1e1e] font-sans pt-24">
      <div className="max-w-screen-xl mx-auto px-6 py-12">

        <section className="text-center">
          <h1 className="text-5xl font-extrabold text-[#4b3f72]">
            Welcome to BookNest
          </h1>
          <p className="text-lg text-[#5a5a5a] mt-4">
            Discover, Manage, and Explore your favorite books in an immersive
            experience
          </p>

          {/* Search Bar */}

          <div className="mt-8">
            <input
              type="text"
              placeholder="Search for a book..."
              className="p-4 rounded-full text-[#1e1e1e] bg-white placeholder-[#888] w-full max-w-md mx-auto border-2 border-[#4b3f72] focus:outline-none focus:ring-2 focus:ring-[#4b3f72]"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </section>

        {/* Trending Books Section */}

        {query === "" && (
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#4b3f72] mb-6">
              Trending Books
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {loading ? (
                <p className="text-center text-xl text-[#4b3f72]">
                  Loading trending books...
                </p>
              ) : trendingBooks.length > 0 ? (
                trendingBooks.filter((book) => book.cover_id).slice(0, 5).map((book) => (
                    <div
                      key={book.key}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-full h-80 bg-gray-200 rounded-md overflow-hidden">
                        <img
                          src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                          alt={book.title}
                          className= "w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/200x300?text=No+Cover";
                          }}
                        />
                      </div>
                      <h2 className="text-lg font-semibold mt-4 text-[#4b3f72]">
                        {book.title}
                      </h2>
                      <p className="text-sm text-[#555] mt-2">
                        by{" "}
                        {book.authors ? book.authors.map((a) => a.name).join(", ") : "Unknown Author"}
                      </p>
                      <div className="mt-4 text-center">
                        <button className="bg-[#4b3f72] text-white py-2 px-4 rounded-full text-sm hover:bg-[#6d5c9e] transition-all">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))
              ) : (
                <p className="text-center text-xl text-[#4b3f72]">
                  No trending books available.
                </p>
              )}
            </div>
          </section>
        )}

        {/* User-Added Books Section */}

        {query === "" && userBooks.length > 0 && (
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#4b3f72] mb-6">
              Your Books
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {userBooks.slice(0, 5).map((book) => (
                <div
                  key={book.id}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
                > 
                  <div className="w-full h-80 bg-gray-200 rounded-md overflow-hidden">
                    <img src="https://via.placeholder.com/200x300?text=No+Cover" alt={book.title} className="w-full h-full object-cover"/>
                  </div>
                  <h2 className="text-lg font-semibold mt-4 text-[#4b3f72]">
                    {book.title}
                  </h2>
                  <p className="text-sm text-[#555] mt-2">by {book.author}</p>
                  <p className="text-sm text-[#555] mt-1">
                    Published: {book.year}
                  </p>
                  <div className="mt-4 text-center">
                    <button className="bg-[#4b3f72] text-white py-2 px-4 rounded-full text-sm hover:bg-[#6d5c9e] transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Book Search Results */}

        {query !== "" && (
          <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {loading ? (
              <p className="text-center text-xl text-[#4b3f72]">
                Loading books...
              </p>
            ) : books.length > 0 ? (
              books.map((book) => (
                <div
                  key={book.key}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-full h-80 bg-gray-200 rounded-md overflow-hidden">
                    <img
                      src={
                        book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : "https://via.placeholder.com/200x300?text=No+Cover"
                      }
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mt-4 text-[#4b3f72]">
                    {book.title}
                  </h2>
                  <p className="text-sm text-[#555] mt-2">
                    by{" "}
                    {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
                  </p>
                  <div className="mt-4 text-center">
                    <button className="bg-[#4b3f72] text-white py-2 px-4 rounded-full text-sm hover:bg-[#6d5c9e] transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-xl text-[#4b3f72]">
                No books found.
              </p>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default Home;
