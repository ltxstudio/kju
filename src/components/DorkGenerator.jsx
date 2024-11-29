import { useState } from "react";
import {
  FaRegCopy,
  FaMoon,
  FaSun,
  FaRegWindowClose,
  FaTrashAlt,
  FaInfoCircle,
  FaLightbulb,
  FaQuestionCircle,
} from "react-icons/fa";
import { dorkTypes, dorkDescriptions } from "../data/dorks";

const DorkGenerator = () => {
  const [dorkType, setDorkType] = useState("intitle");
  const [keywords, setKeywords] = useState("");
  const [generatedDork, setGeneratedDork] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [dorkHistory, setDorkHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateDork = () => {
    if (!keywords) {
      alert("Please enter keywords to generate a dork.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const dork = `${dorkType}:${keywords}`;
      setGeneratedDork(dork);
      setDorkHistory((prevHistory) => [dork, ...prevHistory]);
      setLoading(false);
    }, 500);
  };

  const handleCopyDork = () => {
    navigator.clipboard.writeText(generatedDork);
    alert("Dork copied to clipboard!");
  };

  const handleClear = () => {
    setKeywords("");
    setGeneratedDork("");
  };

  const handleDeleteHistory = (dork) => {
    setDorkHistory(dorkHistory.filter((item) => item !== dork));
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg mt-10">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-center">Dork Generator</h1>
          <button
            onClick={handleToggleDarkMode}
            className="p-3 rounded-full focus:outline-none"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          </button>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Generate a Dork</h2>
            <label htmlFor="dork-type" className="block font-medium">
              Choose Dork Type:
            </label>
            <select
              id="dork-type"
              value={dorkType}
              onChange={(e) => setDorkType(e.target.value)}
              className="w-full p-3 border rounded-lg mt-2"
            >
              {dorkTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <p className="mt-2 text-sm text-gray-500">{dorkDescriptions[dorkType]}</p>

            <label htmlFor="keywords" className="block font-medium mt-4">
              Enter Keywords:
            </label>
            <input
              type="text"
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="e.g., login page"
              className="w-full p-3 border rounded-lg mt-2"
            />

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handleGenerateDork}
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {loading ? "Generating..." : "Generate Dork"}
              </button>
              <button
                onClick={handleClear}
                className="ml-2 p-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                <FaRegWindowClose />
              </button>
            </div>
          </div>

          {generatedDork && (
            <div className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-semibold">Generated Dork</h2>
              <p className="mt-2">{generatedDork}</p>
              <button
                onClick={handleCopyDork}
                className="mt-4 p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                <FaRegCopy className="inline mr-2" /> Copy Dork
              </button>
            </div>
          )}
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Dork History</h2>
          {dorkHistory.length > 0 ? (
            <ul className="space-y-3">
              {dorkHistory.map((dork, index) => (
                <li
                  key={index}
                  className="bg-gray-200 p-3 rounded-lg flex justify-between items-center"
                >
                  <p>{dork}</p>
                  <button
                    onClick={() => handleDeleteHistory(dork)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No dorks generated yet.</p>
          )}
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <div className="flex items-center gap-3">
            <FaInfoCircle className="text-blue-500 text-2xl" />
            <p className="text-gray-600">
              The Dork Generator allows you to create Google dorks to search for specific information efficiently.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaLightbulb className="text-yellow-500 text-2xl" />
              <p>Generate Google dorks easily with just a few clicks.</p>
            </div>
            <div className="flex items-center gap-3">
              <FaTrashAlt className="text-red-500 text-2xl" />
              <p>Manage and delete your dork history seamlessly.</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMoon className="text-gray-600 text-2xl" />
              <p>Switch between light and dark modes for better visibility.</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaQuestionCircle className="text-green-500 text-2xl" />
              <p>What is a Google dork? A Google dork is a search query that uses advanced operators to locate specific information on the web.</p>
            </div>
            <div className="flex items-center gap-3">
              <FaQuestionCircle className="text-green-500 text-2xl" />
              <p>How can I use this tool? Select a dork type, enter keywords, and click generate!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DorkGenerator;
