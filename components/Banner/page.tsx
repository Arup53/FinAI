"use client";

import dynamic from "next/dynamic";
import bannerAnimation from "../animation/bannerAnimation.json";

// Import Lottie dynamically with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Banner() {
  return (
    <section className="flex justify-between items-center text-center min-h-screen bg-black px-48">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white mt-4">FinAI</h1>
        <h3 className="text-5xl font-bold text-white mt-4">
          Simplify Investments <br />
          with AI
        </h3>
        <p className="mt-4 text-white">AI AGENT For Crypto Investment</p>
      </div>

      <div>
        <Lottie animationData={bannerAnimation} loop={true} />
      </div>
    </section>
  );
}
