"use client";
import React, { useRef } from "react";
import { Brain, Zap, MessageSquareMore } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Zap,
    title: "Real Time Update",
    description:
      "Experience seamless real-time updates with instant data synchronization, ensuring you're always working with the latest information.",
  },
  {
    icon: Brain,
    title: "AI Agent as Advisor",
    description:
      "Get intelligent insights and recommendations from our advanced AI advisor, helping you make informed decisions quickly and effectively.",
  },
  {
    icon: MessageSquareMore,
    title: "RAG Q&A Assistant",
    description:
      "Access our sophisticated retrieval-augmented generation system for accurate, context-aware answers to your complex questions.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.3, // Stagger the animations
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-0"
    >
      <div className="flex flex-col items-center text-center">
        <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

const Features = () => {
  return (
    <div className="min-h-[150vh] bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="pt-20 pb-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-indigo-600"> Modern Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our cutting-edge features can transform your workflow
            and boost productivity
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
