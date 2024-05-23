import React from 'react';
import { slides } from "../../../Data";
import { motion } from 'framer-motion';

const Carousel = () => {
  const duplicatedSlides = [...slides, ...slides]; // Duplicating slides for infinite scroll

  return (
    <div className="relative h-full overflow-hidden py-10 bg-white mx-auto" style={{ width: "100%" }}>
      <motion.div
        className="flex gap-8"
        animate={{
          x: ['0%', '-100%'],
          transition: {
            ease: 'linear',
            duration: 15,
            repeat: Infinity,
          }
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
            <div className="flex items-center justify-center h-full">
              <img src={slide} alt={`client ${index + 1}`} className="w-full object-cover" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
