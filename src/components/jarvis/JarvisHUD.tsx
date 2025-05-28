
import { motion } from "framer-motion";

interface JarvisHUDProps {
  isInitialized: boolean;
}

export const JarvisHUD = ({ isInitialized }: JarvisHUDProps) => {
  return (
    <>
      {/* Top HUD Elements */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInitialized ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
        className="absolute top-8 left-8"
      >
        <div className="border border-cyan-400/30 bg-cyan-900/10 backdrop-blur-sm rounded p-3">
          <div className="text-cyan-400 text-xs font-mono mb-1">SYSTEM STATUS</div>
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
            <span className="text-green-400 text-sm font-mono">ONLINE</span>
          </div>
        </div>
      </motion.div>

      {/* Right side data panels */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInitialized ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 1.5 }}
        className="absolute top-8 right-8 space-y-4"
      >
        <div className="border border-cyan-400/30 bg-cyan-900/10 backdrop-blur-sm rounded p-3 w-48">
          <div className="text-cyan-400 text-xs font-mono mb-2">NEURAL ACTIVITY</div>
          <div className="space-y-1">
            {['COGNITIVE', 'ANALYTICAL', 'RESPONSE'].map((system, i) => (
              <div key={system} className="flex justify-between items-center">
                <span className="text-cyan-300 text-xs">{system}</span>
                <motion.div
                  animate={{ width: [`${60 + i * 10}%`, `${80 + i * 10}%`, `${60 + i * 10}%`] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="h-1 bg-cyan-400 rounded"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="border border-cyan-400/30 bg-cyan-900/10 backdrop-blur-sm rounded p-3 w-48">
          <div className="text-cyan-400 text-xs font-mono mb-2">PROCESSING POWER</div>
          <div className="text-cyan-300 text-lg font-mono">
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              97.3%
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Bottom corner indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInitialized ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-8"
      >
        <div className="border border-cyan-400/30 bg-cyan-900/10 backdrop-blur-sm rounded p-3">
          <div className="text-cyan-400 text-xs font-mono">STARK INDUSTRIES</div>
          <div className="text-cyan-300 text-xs font-mono">AI ASSISTANT v3.0</div>
        </div>
      </motion.div>

      {/* Scanning lines effect */}
      <motion.div
        animate={{ y: ['-100vh', '100vh'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
      />
      
      <motion.div
        animate={{ y: ['100vh', '-100vh'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.5 }}
        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
      />
    </>
  );
};
