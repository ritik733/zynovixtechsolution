"use client";

export default function ScrollIndicator() {
  return (
    <div className="mt-20 flex justify-center">
      <div className="flex flex-col items-center">

        <span className="mb-3 text-xs uppercase tracking-[4px] text-slate-500">
          Scroll
        </span>

        <div className="flex h-14 w-8 justify-center rounded-full border border-cyan-400/30">

          <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-cyan-400" />

        </div>

      </div>
    </div>
  );
}