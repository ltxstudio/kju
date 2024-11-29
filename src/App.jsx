import React from "react";
import DorkGenerator from "./components/DorkGenerator";

function App() {
  return (
    <div className="App bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen flex flex-col items-center text-white">
      {/* Navbar */}
      <header className="w-full p-4 shadow-lg bg-opacity-80 bg-indigo-700 sticky top-0 z-10">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dork Generator</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col items-center p-6">
        {/* Hero Section */}
        <section className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Effortlessly Generate Google Dorks</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Simplify your web searches with advanced Google dork queries. Generate, manage, and copy your dorks with ease.
          </p>
          <a
            href="#generator"
            className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-lg text-white text-lg font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </section>

        {/* Dork Generator Component */}
        <section id="generator" className="w-full max-w-6xl">
          <DorkGenerator />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="w-full bg-indigo-800 p-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">© 2024 Dork Generator. All rights reserved.</p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a href="#about" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-300 hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-300 hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
