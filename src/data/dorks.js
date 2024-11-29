export const dorkTypes = [
  "intitle", "inurl", "intext", "filetype", "site", "inanchor", "cache", 
  "allintext", "allintitle", "allinurl", "allinanchor", "link", "related", 
  "inpostauthor", "inposttitle", "define", "phonebook", "stocks", "inurl:index of", 
  "inurl:login", "intitle:index of", "site:.gov", "site:.edu", "inurl:wp-admin", 
  "inurl:admin", "ext:sql", "ext:bak", "inurl:admin.php", "inurl:robots.txt", 
  "inurl:phpinfo.php", "intitle:admin login", "inurl:phpmyadmin", "intitle:login page", 
  "inurl:wp-content", "inurl:config", "intitle:index of /admin"
];

export const dorkDescriptions = {
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
  "inurl:admin.php": "Finds admin panels in PHP format.",
  "inurl:robots.txt": "Searches for publicly accessible robots.txt files.",
  "inurl:phpinfo.php": "Finds PHP info pages (often used for vulnerability scanning).",
  "intitle:admin login": "Searches for admin login pages with 'admin login' in the title.",
  "inurl:phpmyadmin": "Searches for publicly available phpMyAdmin login pages.",
  "intitle:login page": "Finds pages with 'login page' in the title.",
  "inurl:wp-content": "Searches for WordPress content directories.",
  "inurl:config": "Searches for configuration files (e.g., config.php).",
  "intitle:index of /admin": "Searches for publicly exposed /admin directories."
};