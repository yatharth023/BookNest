function About() {
  return (
    <div className="bg-[#f3f3f3] min-h-screen text-[#1e1e1e] font-sans">
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700">
          About BookNest 📚
        </h2>

        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>BookNest</strong> is an innovative tech company dedicated to
            revolutionizing the way people interact with books. We believe in
            fostering a world where reading is more accessible, engaging, and
            organized. BookNest is not just a book management tool; it’s your
            digital companion, offering a simple, streamlined platform to
            discover, track, and manage your books effortlessly.
          </p>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Founded by a team of passionate book enthusiasts, BookNest aims to
            create a community-driven platform where readers can store their
            collections, explore trending titles, and share their reading
            experiences. We are committed to providing a seamless, user-friendly
            experience and continuously improving the app to meet the evolving
            needs of book lovers everywhere.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
            ✨ Our Vision
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our vision is to be the go-to platform for book lovers worldwide,
            creating a hub for managing and exploring books. We aim to inspire
            and empower individuals to read more, track their progress, and
            share their love of literature with others.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
            💡 Our Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            BookNest’s mission is to provide a smart, intuitive book management
            solution for individuals, libraries, and educational institutions.
            Through innovative features and continuous updates, we strive to
            make reading easier, more organized, and enjoyable for all.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
            🔧 What We Offer
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              📚 Personalized book management to track your reading progress
            </li>
            <li>
              📖 Dynamic and interactive book discovery and search features
            </li>
            <li>
              ⚙️ Seamless integration with external APIs to fetch book data
            </li>
            <li>🧑‍🤝‍🧑 A growing community of book enthusiasts</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
            🛠️ Tech Stack
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <strong>React.js</strong> – for building interactive user
              interfaces
            </li>
            <li>
              <strong>Tailwind CSS</strong> – for responsive and modern design
            </li>
            <li>
              <strong>React Router</strong> – for smooth navigation
            </li>
            <li>
              <strong>Context API</strong> – for state management across the app
            </li>
            <li>
              <strong>Open Library API</strong> – for fetching book data and
              images
            </li>
          </ul>
        </section>

        <section className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Join us on our journey to make the world a more literary place. At
            BookNest, we don't just manage books—we inspire lifelong learning
            and passion for reading. Thank you for being part of our story!
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 BookNest, All rights reserved
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
