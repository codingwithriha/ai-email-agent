"use client";

import { useState } from "react";
import GeneratedEmail from "./GeneratedEmail";

export default function EmailForm() {
  const [recipient, setRecipient] = useState("");
  const [purpose, setPurpose] = useState("");
  const [tone, setTone] = useState("Formal");
  const [type, setType] = useState("Job Email");
  const [length, setLength] = useState("Medium");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<null | string>(null);

  const generateEmail = async () => {
    setLoading(true);
    setEmail("");

    const res = await fetch("/api/generate-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient,
        purpose,
        tone,
        type,
        length,
      }),
    });

    const data = await res.json();
    setEmail(data?.email || "");
    setLoading(false);
  };

  return (
    <div className="mt-12 max-w-3xl mx-auto">

      {/* CARD */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">

        {/* HEADER */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">
            AI Email Generator
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Write a few details and let AI craft your professional email
          </p>
        </div>

        {/* INPUT GROUP */}
        <div className="space-y-4">

          {/* Recipient */}
          <div>
            <label className="text-sm text-gray-400">Recipient</label>
            <input
              type="text"
              placeholder="e.g. Hiring Manager"
              className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-purple-500 transition"
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>

          {/* Purpose */}
          <div>
            <label className="text-sm text-gray-400">Email Purpose</label>
            <textarea
              placeholder="Describe what you want to write..."
              className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-white/10 h-28 focus:outline-none focus:border-purple-500 transition"
              onChange={(e) => setPurpose(e.target.value)}
            />
          </div>

          {/* OPTIONS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div>
              <label className="text-sm text-gray-400">Tone</label>
              <select
                className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-white/10"
                onChange={(e) => setTone(e.target.value)}
              >
                <option>Formal</option>
                <option>Friendly</option>
                <option>Persuasive</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400">Type</label>
              <select
                className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-white/10"
                onChange={(e) => setType(e.target.value)}
              >
                <option>Job Email</option>
                <option>Client Email</option>
                <option>Follow-up</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400">Length</label>
              <select
                className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-white/10"
                onChange={(e) => setLength(e.target.value)}
              >
                <option>Short</option>
                <option>Medium</option>
                <option>Long</option>
              </select>
            </div>

          </div>

        </div>

        {/* ACTION BUTTON */}
        <div className="mt-6">
          <button
            onClick={generateEmail}
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-medium hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Generating Email..." : "Generate Email"}
          </button>
        </div>

      </div>

      {/* OUTPUT */}
      {email && (
      <GeneratedEmail
        email={email}
        onRegenerate={generateEmail}
/>
)}

    </div>
  );
}