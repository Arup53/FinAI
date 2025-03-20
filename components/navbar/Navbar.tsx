"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className=" flex justify-center items-center px-6 py-4 bg-black ">
      {/* Left Side - Brand Name */}
      {/* <div className="text-2xl font-bold text-white">FinAI</div> */}

      {/* Right Side - Buttons */}
      <div className="flex gap-4  px-4 py-2">
        <Button className="px-4 py-2 bg-white text-black rounded-full hover:bg-blue-700 transition">
          Log In
        </Button>
        <Button className="px-4 py-2 bg-white text-black rounded-full hover:bg-blue-700 transition">
          <Link href="/dashboard">Dashboard</Link>
        </Button>

        {/* <button className="px-4 py-2 text-white border rounded-lg bg-gradient-to-r from-pink-300 to-purple-300  ">
          AI Chat
        </button> */}
      </div>
    </nav>
  );
}
