import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const DorkGenerator = () => {
  const [dorkType, setDorkType] = useState("intitle");
  const [keywords, setKeywords] = useState("");
  const [generatedDork, setGeneratedDork] = useState("");

  const dorkTypes = [
    "intitle", 
    "inurl", 
    "intext", 
    "filetype", 
    "site", 
    "inanchor", 
    "cache", 
    "allintext", 
    "allintitle", 
    "allinurl", 
    "allinanchor", 
    "link", 
    "related", 
    "inpostauthor", 
    "inposttitle", 
    "define",
    "phonebook", 
    "stocks", 
    "inurl:index of", 
    "inurl:login", 
    "intitle:index of", 
    "site:.gov", 
    "site:.edu", 
    "inurl:wp-admin", 
    "inurl:admin", 
    "ext:sql", 
    "ext:bak"
  ];

  const handleGenerateDork = () => {
    if (!keywords) {
      alert("Please enter keywords to generate a dork.");
      return;
    }
    setGeneratedDork(`${dorkType}:${keywords}`);
  };

  const handleCopyDork = () => {
    navigator.clipboard.writeText(generatedDork);
    alert("Dork copied to clipboard!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Dork Generator</h1>
      
      <div className="mb-4">
        <label htmlFor="dork-type" className="block text-gray-700 font-medium">Choose Dork Type:</label>
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
      </div>

      <div className="mb-4">
        <label htmlFor="keywords" className="block text-gray-700 font-medium">Enter Keywords:</label>
        <input
          type="text"
          id="keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="e.g., login page"
          className="w-full p-3 border border-gray-300 rounded-lg mt-2"
        />
      </div>

      <button
        onClick={handleGenerateDork}
        className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
      >
        Generate Dork
      </button>

      {generatedDork && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Generated Dork:</h2>
          <p className="text-gray-600 font-medium mt-2">{generatedDork}</p>
          <button
            onClick={handleCopyDork}
            className="mt-4 p-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            <FaRegCopy className="inline mr-2" /> Copy Dork
          </button>
        </div>
      )}
    </div>
  );
};

export default DorkGenerator;
