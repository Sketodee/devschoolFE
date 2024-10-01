import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Button from '../../components/Button';
import { useModal } from '../../context/ModalContext';

const SophisticatedJumbotron = ({ 
  primaryColor = "#4F46E5", 
  secondaryColor = "#818CF8",
  navbarHeight = "8px" // Default navbar height, adjust as needed
}) => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  const { openModal } = useModal();

  return (
    <div className="relative" style={{
      height: `calc(100vh - ${navbarHeight})`,
      marginTop: navbarHeight
    }}>
      {/* Background elements with negative z-index */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: -1 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-gray-800"></div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            // ... (particle options remain the same)
          }}
        />
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "30px 30px"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight  platypi-400">
              Accelerate Your Career With<br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Endless Growth.
              </span>
            </h1>
          </motion.div>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
         Begin your tech journey and expand your career opportunities in the tech space by learning tech skills in demand
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button  onClick={openModal} text={"Apply"} className={"bg-purple-600 my-5 text-white"} />
          </motion.div>
        </div>
      </div>

      {/* Animated shape with negative z-index */}
      <motion.div 
        className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 opacity-20"
        style={{ zIndex: -1 }}
        initial={{ rotate: 0, scale: 0 }}
        animate={{ 
          rotate: 360,
          scale: [0, 1, 1, 0, 0],
          translateY: [0, -100, -100, 0, 0],
          translateX: [0, -100, -100, 0, 0]
        }}
        transition={{
          duration: 20,
          ease: "linear",
          times: [0, 0.2, 0.8, 1, 1],
          repeat: Infinity,
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill={primaryColor} d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.1,15.3,83.5,30.6,75.2,43.9C66.9,57.3,54.8,68.7,40.9,76.5C27.1,84.3,13.6,88.4,-0.9,89.9C-15.3,91.4,-30.6,90.2,-43.9,83.7C-57.3,77.2,-68.7,65.4,-76.5,51.5C-84.3,37.5,-88.4,18.8,-89,0C-89.5,-18.8,-86.4,-37.5,-77.1,-51.9C-67.8,-66.3,-52.3,-76.3,-36.8,-82.6C-21.3,-88.9,-5.7,-91.5,5.8,-86.1C17.3,-80.7,30.6,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
    </div>
  );
};

export default SophisticatedJumbotron;