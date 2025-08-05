import { motion } from "framer-motion";
import { FiSearch, FiPlus } from "react-icons/fi";
import { PiGlobeHemisphereEastLight } from "react-icons/pi";

export default function NotFound404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white text-blue-800 relative overflow-hidden">
      <h1 className="text-5xl font-bold mb-4">404</h1>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl font-extrabold flex items-center gap-4"
      >
        <span className="relative">
          <FiSearch className="text-6xl absolute -left-4 top-0 animate-bounce" />
          4
        </span>
        <span className="text-blue-500">0</span>
        <span className="relative">
          4
          <FiPlus className="text-5xl absolute -right-5 bottom-0 animate-pulse" />
        </span>
      </motion.div>

      <div className="flex items-center gap-4 mt-2">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm shadow"
        >
          oops
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm shadow"
        >
          not found
        </motion.span>
      </div>

      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-10 right-10 opacity-30 text-6xl"
      >
        <PiGlobeHemisphereEastLight />
      </motion.div>

      <p className="mt-6 text-sm text-blue-500">The page you're looking for isn't here.</p>
    </div>
  );
}