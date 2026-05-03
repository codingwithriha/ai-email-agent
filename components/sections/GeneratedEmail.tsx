"use client";

import { useState } from "react";
import { Copy, RefreshCcw } from "lucide-react";

export default function GeneratedEmail({
  email,
  onRegenerate,
}: {
  email: string;
  onRegenerate: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mt-6 max-w-3xl mx-auto">
      {/* CARD */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Generated Email</h3>

          {/* ACTION BUTTONS */}
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              <Copy size={14} />
              {copied ? "Copied" : "Copy"}
            </button>

            <button
              onClick={onRegenerate}
              className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              <RefreshCcw size={14} />
              Regenerate
            </button>
          </div>
        </div>

        {/* SUBJECT */}
        <div className="mb-4">
          <p className="text-xs text-gray-400">Subject</p>
          <p className="text-white font-medium mt-1">
            AI Generated Email Subject
          </p>
        </div>

        {/* BODY */}
        <div className="text-sm text-gray-300 whitespace-pre-line leading-relaxed">
          {email || "Your generated email will appear here..."}
        </div>
      </div>
    </div>
  );
}
