"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto mb-8 h-32 w-32 rounded-full border-2 border-cyan-500/30"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-3xl font-bold text-cyan-400">
                  {Math.min(100, Math.round(progress))}%
                </span>
              </div>
            </motion.div>
            <p className="text-sm uppercase tracking-[8px] text-slate-500">
              Initializing Zynovix
            </p>
            <div className="mx-auto mt-6 h-1 w-64 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-violet-500"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}