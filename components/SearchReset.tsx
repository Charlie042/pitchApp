"use client";
import React from "react";
import Link from "next/link";
import { X } from 'lucide-react'
const SearchReset = () => {
  const reset = () => {
    const input = document.querySelector(".search-input2") as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  };

  return (
    <Link href="/" className="search-btn text-white" onClick={reset}>
      <X/>
    </Link>
  );
};

export default SearchReset;
