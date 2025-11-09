"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CopyButton({
  text,
  copyText,
  copiedText,
}: {
  text: string;
  copyText: string;
  copiedText: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="hover:border-primary/50 flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-zinc-800"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-green-500" />
          {copiedText}
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          {copyText}
        </>
      )}
    </button>
  );
}
