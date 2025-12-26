"use client";

import { motion } from "framer-motion";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  title,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    className={`rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 md:p-6 ${className}`}
  >
    {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
    {children}
  </motion.div>
);
