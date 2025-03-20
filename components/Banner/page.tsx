"use client";
import Lottie from "lottie-react";

import bannerAnimation from "../animation/bannerAnimation.json";

// const handleGetStarted = () => {
//   console.log("Button clicked");
// };

export default function Banner() {
  return (
    <section className="flex  justify-between items-center text-center min-h-screen bg-black px-48">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white mt-4">FinAI</h1>
        <h3 className="text-5xl font-bold text-white mt-4">
          Simplify Investments <br />
          with AI
        </h3>
        <p className="mt-4 text-white">AI AGENT For Crypto Investment</p>
        {/* <Button
          text="GET STARTED"
          style="mt-6 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          handler={handleGetStarted}
        /> */}
      </div>

      <div>
        <Lottie animationData={bannerAnimation} loop={true} />
      </div>
    </section>
  );
}
