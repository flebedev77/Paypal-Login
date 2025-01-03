"use client";

import React, { useState } from "react";
import "@/app/globals.css";
import "@/components/components.css";

interface InputProps {
  placeholderText: string;
  className: string;
}

const Input: React.FC<InputProps> = ({ placeholderText, className }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div
      className={`border-solid border-gray-500 border my-10 rounded-md flex flex-col relative input-container ${className} ${isFocused ? "input-container-focused" : ""}`}
    >
      <p
        className={`-mb-2 text-gray-500 ${isFocused || !isEmpty ? "panim" : ""}`}
      >
        {placeholderText}
      </p>
      <input
        className="outline-none w-full h-full"
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsEmpty(e.target.value.trim() == "");
          setIsFocused(false);
        }}
      />
    </div>
  );
};

export default Input;
