import {
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex flex-row w-full justify-between px-5 py-10 shadow-md bg-gradient-to-r from-gray-800 to-gray-950 text-white">
      <h2 className="font-bold text-2xl text-red-600 w-52 h-1">R A D I X</h2>
      <h2
        className="font-bold text-center md:text-left mt-2 text-gray-300"
        style={{ fontSize: "15px" }}
      >
        Copyright © 2024 by <span className="text-red-600">RADIX</span> . All
        Rights Reserved
      </h2>
      <div className="flex gap-10">
        <a
          href="https://www.instagram.com/akmlyz/"
          className="text-gray-300"
          style={{ fontSize: "24px" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://wa.me/yourphonenumber"
          className="text-gray-300"
          style={{ fontSize: "24px" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          href="https://www.tiktok.com/@youraccount"
          className="text-gray-300"
          style={{ fontSize: "24px" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
