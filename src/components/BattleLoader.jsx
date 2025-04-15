import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BattleLoader = ({ onCancel, onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (progress >= 100) {
      setFadeOut(true);
      const timeout = setTimeout(() => onFinish(), 600);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 4, 100));
    }, 100);

    return () => clearInterval(interval);
  }, [progress, onFinish]);

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div
      className={`absolute inset-0 z-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <img src="/Logo.png" alt="Logo" className="w-28 mb-8 animate-bounce" />

        <div className="w-4/5 max-w-lg h-4 bg-gray-300 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-green-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 text-white font-semibold">
          {progress}% wird geladen...
        </p>

        <button
          onClick={handleCancel}
          className="mt-6 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-800 shadow-lg cursor-pointer"
        >
          Run
        </button>
      </div>
    </div>
  );
};

export default BattleLoader;
