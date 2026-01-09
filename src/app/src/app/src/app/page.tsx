"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { watches, Watch } from "./data";
import { Menu, Search, ShoppingBag } from "lucide-react";

export default function LuxuryCatalog() {
  const [filter, setFilter] = useState<"current" | "legacy">("current");

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* NAVIGATION bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-6 py-5 flex justify-between items-center">
        <Menu className="w-5 h-5 cursor-pointer" />
        <div className="text-xl font-bold tracking-[0.3em] pl-8">AUDEMARS PIGUET</div>
        <div className="flex gap-6 items-center">
          <Search className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="pt-40 pb-20 px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-12">
            WATCH <br /> COLLECTION
          </h1>

          {/* FILTER SWITCHER */}
          <div className="flex gap-10 border-b border-gray-200">
            {["current", "legacy"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`pb-4 text-xs tracking-[0.2em] font-bold uppercase transition-all relative ${
                  filter === type ? "text-black" : "text-gray-400"
                }`}
              >
                {type === "current" ? "Current Collection" : "Legacy Watches"}
                {filter === type && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-black" 
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </header>

      {/* GRID KATALOG */}
      <main className="px-6 md:px-12 lg:px-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {watches
              .filter((w) => w.category === filter)
              .map((watch) => (
                <WatchItem key={watch.id} watch={watch} />
              ))}
          </AnimatePresence>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-20 border-t border-gray-100 text-center">
        <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">
          &copy; 2026 Crafted for Excellence
        </p>
      </footer>
    </div>
  );
}

function WatchItem({ watch }: { watch: Watch }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] bg-[#F6F6F6] overflow-hidden flex items-center justify-center p-12">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          src={watch.image}
          alt={watch.name}
          className="w-full h-full object-contain mix-blend-multiply transition-transform"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>
      
      <div className="mt-8 text-center md:text-left">
        <p className="text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-2">
          {watch.collection}
        </p>
        <h3 className="text-lg font-light tracking-tight group-hover:underline decoration-1 underline-offset-4">
          {watch.name}
        </h3>
        <p className="text-[9px] font-mono text-gray-400 mt-4 tracking-widest uppercase">
          {watch.ref}
        </p>
      </div>
    </motion.div>
  );
}
