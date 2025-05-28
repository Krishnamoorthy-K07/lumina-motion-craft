
import { motion } from "framer-motion";

interface VoiceWaveformProps {
  isListening: boolean;
}

export const VoiceWaveform = ({ isListening }: VoiceWaveformProps) => {
  return (
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
      <div className="flex items-center space-x-1">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-cyan-400 rounded-full"
            animate={
              isListening
                ? {
                    height: [4, Math.random() * 40 + 10, 4],
                    opacity: [0.3, 1, 0.3],
                  }
                : { height: 4, opacity: 0.3 }
            }
            transition={{
              duration: 0.5,
              repeat: isListening ? Infinity : 0,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
};
