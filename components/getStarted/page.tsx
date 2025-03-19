import { useRef } from "react";
import { LogIn } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HowToCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-indigo-600 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 max-w-2xl mx-auto"
    >
      <div className="flex flex-col items-center text-center">
        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-6">
          <LogIn className="h-8 w-8 text-indigo-600" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Login to Get Started
        </h3>
        <p className="text-indigo-100 leading-relaxed mb-8">
          Begin your journey by creating an account. Access all our powerful
          features and start transforming your workflow today.
        </p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300">
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

const GetStarted = () => {
  return (
    <div className="px-4 py-16 bg-white rounded-3xl shadow-lg">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How to Get Started
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Begin your journey in just one simple step
        </p>
      </div>
      <HowToCard />
    </div>
  );
};

export default GetStarted;
