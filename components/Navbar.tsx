"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul className="flex border-b ">
        <li className="-mb-px mr-1">
          <Link
            className="bg-white inline-block rounded-t py-2 px-4 text-blue-700 font-semibold"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="-mb-px mr-1">
          <Link
            className="bg-white inline-block rounded-t py-2 px-4 text-blue-700 font-semibold"
            href="/login"
          >
            Login
          </Link>
        </li>
        {/* <li className="-mb-px mr-1">
          <Link
            className="bg-white inline-block rounded-t py-2 px-4 text-blue-700 font-semibold"
            href="/createPost"
          >
            createPost
          </Link>
        </li> */}
        <li className="-mb-px mr-1">
          <Link
            className="bg-white inline-block rounded-t py-2 px-4 text-blue-700 font-semibold"
            href="/signup"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
