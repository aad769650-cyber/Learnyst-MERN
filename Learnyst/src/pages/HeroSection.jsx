import React from 'react'
import { motion } from "framer-motion"
import TypeWritter from '../functions/TypeWritter'
import { NavLink } from "react-router"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617]">
      
      {/* Ambient background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(99,102,241,0.12),transparent)]" />
      
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center gap-8 h-screen px-6 text-white text-center">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-sm font-medium tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Learning Management, Reimagined
        </motion.div>

        {/* Typewriter headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          <TypeWritter />
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "linear", delay: 0.3 }}
          className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed font-normal"
        >
          A single, powerful LMS built to educate, engage and enable every audience in your business ecosystem.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <button className="group relative px-7 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-base transition-all duration-300 shadow-lg shadow-sky-900/40 hover:shadow-sky-700/50 hover:-translate-y-0.5">
            <NavLink to="/register" className="relative z-10">Talk to us</NavLink>
          </button>

          <button className="group px-7 py-3 rounded-lg border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold text-base transition-all duration-300 bg-white/5 hover:bg-indigo-500/15 hover:-translate-y-0.5 backdrop-blur-sm">
            <NavLink to="/register">Book Demo</NavLink>
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex items-center gap-3 text-slate-500 text-sm mt-2"
        >
          <div className="flex -space-x-2">
            {["G","A","S","M"].map((curr, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[#020617] bg-linear-to-br from-slate-600 to-slate-800"
              />
            ))}
            {/* {curr} */}
          </div>
          <span>Trusted by the best companies in the world.</span>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroSection