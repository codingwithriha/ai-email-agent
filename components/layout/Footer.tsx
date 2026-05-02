import {
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-14">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              MailMind AI
            </h2>

            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              AI-powered email assistant that helps you write professional emails instantly with smart tone control and context awareness.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Product
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white transition cursor-pointer">Features</li>
              <li className="hover:text-white transition cursor-pointer">Demo</li>
              <li className="hover:text-white transition cursor-pointer">How it works</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Connect
            </h3>

            <div className="flex gap-3">

              <a
                href="https://github.com/codingwithriha"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/riha-shahzadi"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://leetcode.com/RihaShehzadi"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <FaCode size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-3">

          <p>
            © {new Date().getFullYear()} MailMind AI. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Built with <span className="text-red-500">❤️</span> by
            <span className="text-white font-medium"> codingwithriha</span>
          </p>

        </div>

      </div>
    </footer>
  );
}