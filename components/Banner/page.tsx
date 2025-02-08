"use client";

import Button from "../Button";

const handleGetStarted = () => {
  console.log("Button clicked");
};

export default function Banner() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-white">
      <h1 className="text-5xl font-bold text-gray-900">
        Simplify Investments <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
          with AI
        </span>
      </h1>
      <p className="mt-4 text-gray-600">
        AI tools for instant market insights, FinGPT, and portfolio
        optimization.
      </p>

      <Button
        text="GET STARTED"
        style="mt-6 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        handler={handleGetStarted}
      />
    </section>
  );
}
