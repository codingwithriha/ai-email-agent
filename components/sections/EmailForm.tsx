export default function EmailForm() {
  return (
    <div className="mt-10 max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">

      <h2 className="text-xl font-semibold mb-6">
        AI Email Generator
      </h2>

      {/* Recipient */}
      <input
        type="text"
        placeholder="Recipient (e.g. Hiring Manager)"
        className="w-full mb-4 p-3 rounded-xl bg-black/40 border border-white/10 outline-none"
      />

      {/* Purpose */}
      <textarea
        placeholder="Email purpose..."
        className="w-full mb-4 p-3 rounded-xl bg-black/40 border border-white/10 outline-none h-28"
      />

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">

        <select className="p-3 rounded-xl bg-black/40 border border-white/10">
          <option>Formal</option>
          <option>Friendly</option>
          <option>Persuasive</option>
        </select>

        <select className="p-3 rounded-xl bg-black/40 border border-white/10">
          <option>Job Email</option>
          <option>Client Email</option>
          <option>Follow-up</option>
        </select>

        <select className="p-3 rounded-xl bg-black/40 border border-white/10">
          <option>Short</option>
          <option>Medium</option>
          <option>Long</option>
        </select>

      </div>

      {/* Button */}
      <button className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:scale-[1.02] transition">
        Generate Email
      </button>

    </div>
  );
}