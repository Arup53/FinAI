"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Banner from "@/components/Banner/page";
import Footer from "@/components/footer/page";
import Features from "@/components/features/page";
import GetStarted from "@/components/getStarted/page";

export default function Home() {
  const heroRef = useRef(null);
  const nextPageRef = useRef(null);

  useGSAP(() => {
    gsap.to(heroRef.current, {
      opacity: 0,
      scale: 0.9,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <div className="h-[100vh]">
      <section ref={heroRef}>
        <Banner />
      </section>
      <section ref={nextPageRef} className="bg-white h-[100vh] border-2 ">
        <Features />
      </section>
      <section className="bg-white h-[100vh] border-2 ">
        <GetStarted />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
