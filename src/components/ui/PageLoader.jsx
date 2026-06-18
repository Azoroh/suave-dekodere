import React from 'react';
import { motion } from 'framer-motion';

export const PageLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full bg-surface">
      <motion.div
        className="w-12 h-12 border-4 border-outline-variant/30 border-t-[#4b6367] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};
