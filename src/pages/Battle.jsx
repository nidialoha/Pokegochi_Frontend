import { useState } from "react";
import BattleLoader from "../components/BattleLoader";

function Battle() {
  const [loading, setLoading] = useState(true);
  const [cancelled, setCancelled] = useState(false);

  const handleCancel = () => setCancelled(true);
  const handleFinish = () => setLoading(false);

  if (cancelled) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Kampf abgebrochen!
      </div>
    );
  }
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background and full Arena visible */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/BattleArena.png')" }}
        />

        {/* Main Arena UI – wird erst sichtbar, wenn loading = false */}
        {!loading && (
          <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16">
            {/* Gegner (kommt später per API, daher nur Dummy jetzt) */}
            <div className="mb-32 animate-bounce-in">
              <img src="/enemy-placeholder.png" alt="Gegner" className="w-32" />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded  hover:bg-red-800">
                Attack
              </button>
              <button className="bg-yellow-400 text-white px-6 py-3 rounded hover:bg-yellow-600">
                Defense
              </button>
              <button className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-900">
                Special
              </button>
            </div>
          </div>
        )}

        {/* Overlay wird angezeigt, solange loading = true */}
        {loading && (
          <BattleLoader onCancel={handleCancel} onFinish={handleFinish} />
        )}
      </div>
    </>
  );
}

export default Battle;
