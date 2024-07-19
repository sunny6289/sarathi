import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Sarathi. All rights reserved.
        </p>
        <p>
          Follow us on
          <a href="https://www.facebook.com" className="text-blue-400 mx-2">
            Facebook
          </a>
          <a href="https://www.twitter.com" className="text-blue-400 mx-2">
            Twitter
          </a>
          <a href="https://www.instagram.com" className="text-blue-400 mx-2">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
