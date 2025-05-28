
import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JarvisBrain } from "./jarvis/JarvisBrain";
import { HolographicRings } from "./jarvis/HolographicRings";
import { DataStreams } from "./jarvis/DataStreams";
import { VoiceWaveform } from "./jarvis/VoiceWaveform";
import { JarvisHUD } from "./jarvis/JarvisHUD";
import { ParticleField } from "./jarvis/ParticleField";

export const JarvisInterface = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [jarvisText, setJarvisText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Initialize JARVIS startup sequence
    const timer = setTimeout(() => {
      setIsInitialized(true);
      typeJarvisMessage("Good evening, Mr. Stark. JARVIS is online and ready for your commands.");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const typeJarvisMessage = (message: string) => {
    setIsTyping(true);
    setJarvisText("");
    
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < message.length) {
        setJarvisText(prev => prev + message[index]);
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 50);
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        handleUserInput(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      typeJarvisMessage("Voice recognition is not supported in this browser.");
    }
  };

  const handleUserInput = (input: string) => {
    // Simple AI responses for demo
    const responses = [
      "Analyzing your request, sir.",
      "Running diagnostic protocols.",
      "All systems are functioning optimally.",
      "Shall I access the mainframe for you?",
      "Processing your command.",
      "Initiating security protocols.",
      "Your wish is my command, sir."
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    setTimeout(() => {
      typeJarvisMessage(randomResponse);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {/* Holographic Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0066ff" />
          
          <JarvisBrain isInitialized={isInitialized} />
          <HolographicRings />
          <DataStreams />
          <ParticleField />
        </Suspense>
      </Canvas>

      {/* HUD Overlay */}
      <JarvisHUD isInitialized={isInitialized} />

      {/* Voice Waveform */}
      <VoiceWaveform isListening={isListening} />

      {/* JARVIS Text Output */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-8">
        <AnimatePresence>
          {jarvisText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-cyan-900/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6"
            >
              <div className="text-cyan-300 text-xl font-mono">
                {jarvisText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Voice Input Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleVoiceInput}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-2 ${
          isListening 
            ? 'border-red-400 bg-red-400/20' 
            : 'border-cyan-400 bg-cyan-400/20'
        } backdrop-blur-sm flex items-center justify-center transition-all duration-300`}
      >
        <motion.div
          animate={isListening ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.5, repeat: isListening ? Infinity : 0 }}
          className={`w-8 h-8 rounded-full ${
            isListening ? 'bg-red-400' : 'bg-cyan-400'
          }`}
        />
      </motion.button>

      {/* Startup Animation */}
      <AnimatePresence>
        {!isInitialized && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-black flex items-center justify-center z-50"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-8"
              />
              <motion.h1
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-4xl font-mono text-cyan-400 mb-4"
              >
                INITIALIZING J.A.R.V.I.S.
              </motion.h1>
              <motion.p
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                className="text-cyan-300 font-mono"
              >
                Just A Rather Very Intelligent System
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
