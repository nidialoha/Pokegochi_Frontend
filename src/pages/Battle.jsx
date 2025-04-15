import { useEffect, useState } from "react";
import BattleLoader from "../components/BattleLoader";
import { useAuth } from "../Context/AuthProvider";
import axios from "axios";
import HealthBar from "../components/HealthBar";

function Battle() {
  const [loading, setLoading] = useState(true);
  const [cancelled, setCancelled] = useState(false);
  const [enemyPokemon, setEnemyPokemon] = useState({});
  const { primaryPokemon, user, setUser } = useAuth();
  const handleCancel = () => setCancelled(true);
  const handleFinish = () => setLoading(false);

  useEffect(() => {
    const fetchEnemy = async () => {
      try {
        let randomOrderNr = await Math.floor(Math.random() * 151);
        const enemy = await axios.get(
          `http://localhost:8765/pokemon/${randomOrderNr}`
        );
        console.log(enemy.data);
        await setEnemyPokemon(enemy.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEnemy();
  }, []);

  const performAttack = () => {};

  const handleEndOfBattle = () => {};

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
          <div className="relative z-10 flex flex-col items-center justify-between h-auto mt-[15%] w-full">
            {/* Gegner (kommt später per API, daher nur Dummy jetzt) */}
            <div className="mb-1 animate-bounce-in">
              <div className="flex flex-col items-center">
                {/* HealthBar über dem Pokémon */}
                <div className="mt-4 w-40 flex justify-center z-20">
                  <HealthBar
                    currentHealth={enemyPokemon.currentHealth}
                    maxHealth={enemyPokemon.health}
                  />
                </div>
              </div>
              <img
                src={enemyPokemon.imgFront}
                alt="Gegner"
                className="w-96 h-auto"
              />
            </div>
            <div className="mb-1 animate-bounce-in">
              <div className="mt-4 w-40 flex justify-center z-20">
                <HealthBar
                  currentHealth={primaryPokemon.currentHealth}
                  maxHealth={primaryPokemon.health}
                />
              </div>
              <img
                src={primaryPokemon.imgBack}
                alt="MyPokemon"
                className="w-96 h-auto"
              />
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
