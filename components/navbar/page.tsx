"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Left Side - Brand Name */}
      <div className="text-2xl font-bold text-gray-900">FinAI</div>

      {/* Right Side - Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 text-white border rounded-lg bg-gradient-to-r from-pink-300 to-purple-300  ">
          AI Chat
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
          Log In
        </button>
      </div>
    </nav>
  );
}
