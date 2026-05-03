"use client";

const Hero = () => {

  const scrollToEmail = () => {
    document.getElementById("email-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative text-center py-28">

      {/* background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Write Professional Emails <br />
          with <span className="text-purple-400">AI Magic</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Generate job emails, client responses, and professional messages instantly using AI.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button
            onClick={scrollToEmail}
            className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            Start Writing
          </button>

          <button
            onClick={scrollToEmail}
            className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
          >
            View Demo
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;