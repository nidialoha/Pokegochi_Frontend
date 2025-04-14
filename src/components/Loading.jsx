import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Kurze Verzögerung für smooth transition
      setTimeout(() => {
        navigate("/"); // 👈 Zielseite anpassen, z. B. "/home", "/game", etc.
      }, 500);
    }
  }, [progress, navigate]);
  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Hintergrund mit Blur */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/PokemonRoom.png')] bg-cover bg-center filter blur-sm scale-105" />
        </div>

        {/* Inhalt */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          {/* Logo */}
          <img src="/Logo.png" alt="Logo" className="w-40 h-40 mb-8" />

          {/* Ladebalken */}
          <div className="w-full max-w-md h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-green-500 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Lade-Text */}
          <p className="mt-4 text-white font-semibold">
            {progress}% geladen...
          </p>
        </div>
      </div>
    </>
  );
};

export default Loading;
