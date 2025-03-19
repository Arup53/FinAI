export default function Footer() {
  return (
    <footer className="bg-white py-10 px-6 text-gray-900  border-t-2 border-black/20 h-[60vh] ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Left Section - Visit Us */}
        <div className="text-center md:text-left">
          <button className="border border-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            VISIT US
          </button>
          <div className="mt-4 flex gap-10 justify-center md:justify-start">
            <div>
              <h3 className="font-semibold underline">Delaware</h3>
              <p className="text-sm mt-2">
                24A Trolley Square <br />
                Unit 4215, Wilmington, <br />
                DE 19806
              </p>
            </div>
            <div>
              <h3 className="font-semibold  underline">Dhaka</h3>
              <p className="text-sm mt-2">
                ABC Heritage
                <br />
                Gulshan
                <br />
                Dhaka-1212
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Stay in Touch */}
        <div className="text-center md:text-left">
          <button className="border border-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            STAY IN TOUCH
          </button>
          <p className="mt-4 underline">hey@soulhq.ai</p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <span className="text-xl">❌</span>
            <span className="text-xl">🔗</span>
            <span className="text-xl">👤</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm text-gray-600">
        <p>Copyright © 2025 FinAI , Inc. All rights reserved</p>
        <div className="flex justify-center gap-6 mt-2 underline">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
