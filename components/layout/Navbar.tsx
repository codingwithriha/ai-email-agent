"use client";

export default function Navbar() {

  const scrollToEmail = () => {
    document.getElementById("email-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          MailMind AI
        </h1>

        <button
          onClick={scrollToEmail}
          className="bg-white text-black px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transition"
        >
          Get Started
        </button>

      </div>
    </nav>
  );
}