import { useEffect, useState } from "react";
import BattleLoader from "../components/BattleLoader";
import { useAuth } from "../Context/AuthProvider";
import axios from "axios";
import HealthBar from "../components/HealthBar";

function Battle() {
  const [loading, setLoading] = useState(true);
  const [cancelled, setCancelled] = useState(false);
  const [enemyPokemon, setEnemyPokemon] = useState({});
  const { primaryPokemon, user, setUser, setPrimaryPokemon } = useAuth();
  const [battleMessage, setBattleMessage] = useState("");
  const handleCancel = () => setCancelled(true);
  const handleFinish = () => setLoading(false);

  const levelUp = (pokemon) => {
    pokemon.level += 1;
    pokemon.health += 2;
    pokemon.defenseValue += 2;
    pokemon.attackValue += 2;

    return pokemon;
  };

  useEffect(() => {
    const fetchEnemy = async () => {
      try {
        let enemy = {};
        do {
          let randomOrderNr = await Math.floor(Math.random() * 151);
          console.log(randomOrderNr);
          if (randomOrderNr == 0) {
            randomOrderNr += 1;
          }
          enemy = await axios.get(
            `http://localhost:8765/pokemon/${randomOrderNr}`
          );
          enemy = enemy.data;
        } while (enemy.health >= primaryPokemon.health + 10);
        while (enemy.health <= primaryPokemon.health - 5) {
          enemy.level += 1;
          enemy.health += 2;
          enemy.currentHealth += 2;
          enemy.defenseValue += 2;
          enemy.attackValue += 2;
        }
        await setEnemyPokemon(enemy);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEnemy();
  }, []);

  const performAttack = async () => {
    let defenseValue = enemyPokemon.defenseValue * Math.random();
    let damage = primaryPokemon.attackValue - defenseValue;
    if (damage <= 0) damage = 1;
    await setBattleMessage(
      "My Pokemon attacks with " +
        primaryPokemon.attack +
        " and causes " +
        damage +
        " damage."
    );
    let currentHealth = enemyPokemon.currentHealth - damage;
    await setEnemyPokemon((prev) => ({
      ...prev,
      currentHealth,
    }));
    setTimeout(() => {
      let myDefenseValue = primaryPokemon.defenseValue * Math.random();
      let myDamage = enemyPokemon.attackValue - myDefenseValue;
      if (myDamage <= 0) {
        myDamage = 1;
      }
      setBattleMessage(
        enemyPokemon.name +
          " attacks with " +
          enemyPokemon.attack +
          " and causes " +
          myDamage +
          " damage."
      );
      currentHealth = primaryPokemon.currentHealth - myDamage;
      setPrimaryPokemon((prev) => ({
        ...prev,
        currentHealth,
      }));
      setTimeout(() => {
        setBattleMessage("");
      }, 2000);
    }, 2000);
  };

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

            <div
              id="battlearena"
              className="flex flex-row justify-between w-max gap-[10%]"
            >
              <div className="mb-1 animate-bounce-in flex flex-col items-center">
                <div className="">
                  {/* HealthBar über dem Pokémon */}
                  <div className="mt-4 w-40 flex z-20">
                    <HealthBar
                      currentHealth={enemyPokemon.currentHealth}
                      maxHealth={enemyPokemon.health}
                    />
                    <span>Lvl. {enemyPokemon.level}</span>
                  </div>
                </div>
                <img
                  src={enemyPokemon.imgFront}
                  alt="Gegner"
                  className="w-96 h-auto"
                />
              </div>

              <div>
                <span>{battleMessage}</span>
              </div>
              <div className="mb-1 animate-bounce-in flex flex-col items-center">
                <div className="mt-4 w-40 flex justify-center z-20">
                  <HealthBar
                    currentHealth={primaryPokemon.currentHealth}
                    maxHealth={primaryPokemon.health}
                  />
                  <span>Lvl. {primaryPokemon.level}</span>
                </div>
                <img
                  src={primaryPokemon.imgFront}
                  alt="MyPokemon"
                  className="w-96 h-auto"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={performAttack}
                className="bg-red-600 text-white px-6 py-3 rounded  hover:bg-red-800"
              >
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
