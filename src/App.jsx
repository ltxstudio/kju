import React, { useState } from "react";

const App = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  const generateLink = () => {
    const regex = /https:\/\/drive\.google\.com\/file\/d\/(.+?)\/view/;
    const match = inputUrl.match(regex);

    if (match && match[1]) {
      const fileId = match[1];
      const directLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
      setDownloadLink(directLink);
    } else {
      alert("Invalid Google Drive URL!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Google Drive Direct Link Generator
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Paste your Google Drive file link to generate a direct download link.
        </p>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Paste Google Drive link here..."
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={generateLink}
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 transition duration-200"
          >
            Generate Link
          </button>
        </div>
        {downloadLink && (
          <div className="mt-6 p-4 bg-gray-100 border rounded-lg">
            <p className="text-gray-700 font-medium">Your Direct Link:</p>
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 break-words underline mt-2"
            >
              {downloadLink}
            </a>
          </div>
        )}
      </div>
      <footer className="text-white mt-6">
        Built with ❤️ using React and Tailwind CSS
      </footer>
    </div>
  );
};

export default App;
