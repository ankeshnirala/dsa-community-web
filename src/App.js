import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export default function App() {
  const global = useSelector((state) => state.globalReducer.constants);

  return (
    <motion.div
      initial={{ opacity: 0, x: 400 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Centered Content</h1>
          <button
            onClick={() => toast.warning("Uh oh! Something went wrong")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            {global.button}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
