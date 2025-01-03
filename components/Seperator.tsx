"use client";

import React from "react";

export default function Seperator() {
  return (
    <div className="w-full relative flex my-8">
      <span className="w-full border-t border-gray-300"></span>
      <p className="absolute left-1/2 top-0 w-max bg-red z-10 -my-3 -mx-4 bg-white px-2 text-gray-500 text-sm">
        or
      </p>
    </div>
  );
}
