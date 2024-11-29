import { useState } from "react";
import { FaRegCopy, FaMoon, FaSun, FaRegWindowClose, FaTrashAlt } from "react-icons/fa";

// Dork Descriptions
const dorkDescriptions = {
  intitle: "Searches for a specific word in the title of a webpage.",
  inurl: "Searches for a specific word in the URL of a webpage.",
  intext: "Searches for a specific word in the body text of a webpage.",
  filetype: "Finds files of a specific type (e.g., PDF, DOCX).",
  site: "Restricts the search to a specific website or domain.",
  inanchor: "Searches for a specific word in anchor text (links).",
  cache: "Finds the cached version of a webpage.",
  allintext: "Searches for multiple words in the body text of a webpage.",
  allintitle: "Searches for multiple words in the title of a webpage.",
  allinurl: "Searches for multiple words in the URL of a webpage.",
  allinanchor: "Searches for multiple words in anchor text (links).",
  link: "Finds pages that link to a specific URL.",
  related: "Finds pages related to a specific URL.",
  inpostauthor: "Searches for blog posts written by a specific author.",
  inposttitle: "Searches for blog posts with a specific title.",
  define: "Finds definitions of a specific term.",
  phonebook: "Searches publicly available phonebooks.",
  stocks: "Searches for stock market information.",
  "inurl:index of": "Searches for open directory listings.",
  "inurl:login": "Searches for login pages.",
  "intitle:index of": "Searches for open directories in title.",
  "site:.gov": "Restricts the search to government websites.",
  "site:.edu": "Restricts the search to educational websites.",
  "inurl:wp-admin": "Finds WordPress admin login pages.",
  "inurl:admin": "Finds admin login pages.",
  "ext:sql": "Searches for SQL database backup files.",
  "ext:bak": "Searches for backup files.",
};

const DorkGenerator = () => {
  const [dorkType, setDorkType] = useState("intitle");
  const [keywords, setKeywords] = useState("");
  const [generatedDork, setGeneratedDork] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [dorkHistory, setDorkHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const dorkTypes = Object.keys(dorkDescriptions);

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
    }, 500); // simulate loading delay
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
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen transition-colors duration-300`}>
      <div className="max-w-lg mx-auto p-6 rounded-lg shadow-lg mt-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-center mb-6">Dork Generator</h1>
          <button onClick={handleToggleDarkMode} className="p-2 rounded-full">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="dork-type" className="block font-medium">Choose Dork Type:</label>
          <select
            id="dork-type"
            value={dorkType}
            onChange={(e) => setDorkType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
          >
            {dorkTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <p className="mt-2 text-gray-600 text-sm">{dorkDescriptions[dorkType]}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="keywords" className="block font-medium">Enter Keywords:</label>
          <input
            type="text"
            id="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g., login page"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleGenerateDork}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        {generatedDork && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold">Generated Dork:</h2>
            <p className="font-medium">{generatedDork}</p>
            <button
              onClick={handleCopyDork}
              className="mt-4 p-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              <FaRegCopy className="inline mr-2" /> Copy Dork
            </button>
          </div>
        )}

        <div className="mt-6">
          <h2 className="text-lg font-medium mb-3">Dork History</h2>
          <div className="space-y-2">
            {dorkHistory.map((dork, index) => (
              <div key={index} className="bg-gray-100 p-2 rounded-md flex justify-between items-center">
                <p>{dork}</p>
                <button onClick={() => handleDeleteHistory(dork)} className="text-red-500">
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DorkGenerator;
