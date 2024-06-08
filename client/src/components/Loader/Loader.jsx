// src/components/Loader/Loader.js

import React from "react";
import "../../styles/loader.css"; // Create this CSS file for styling the loader

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
