import { useEffect, useState } from "react";
import BattleLoader from "../components/BattleLoader";
import { useAuth } from "../Context/AuthProvider";
import axios from "axios";
import HealthBar from "../components/HealthBar";
import { useNavigate } from "react-router-dom";

function Battle() {
  const [loading, setLoading] = useState(true);
  const [cancelled, setCancelled] = useState(false);
  const [enemyPokemon, setEnemyPokemon] = useState({});
  const { primaryPokemon, user, setUser, setPrimaryPokemon, saveUser, savePokemon } = useAuth();
  const [battleMessage, setBattleMessage] = useState("");
  const handleCancel = () => setCancelled(true);
  const handleFinish = () => setLoading(false);
  const navigate = useNavigate();

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

  const counterAttack = async () => {};

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
    let currentHealth = Math.floor(enemyPokemon.currentHealth - damage);
    if (currentHealth < 0) currentHealth = 0;
    await setEnemyPokemon((prev) => ({
      ...prev,
      currentHealth,
    }));
    if (currentHealth == 0) {
      handleEndOfBattle("enemy");
      return;
    }

    setTimeout(() => {
      let myDefenseValue = primaryPokemon.defenseValue * Math.random();
      let myDamage = Math.floor(enemyPokemon.attackValue - myDefenseValue);
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
      if (currentHealth < 0) currentHealth = 0;
      setPrimaryPokemon((prev) => ({
        ...prev,
        currentHealth,
      }));
      if (currentHealth == 0) {
        handleEndOfBattle("my");
        return;
      }

      setBattleMessage("");
    }, 2000);
  };

  const handleEndOfBattle = async (looser) => {
    try {
      console.log(user);
      console.log("enter endofBattle");
      await console.log(primaryPokemon.currentHealth);
      await console.log(enemyPokemon.currentHealth);
      let coupons = user.coupons + 1;
      setUser((prev) => ({ ...prev, coupons }));
      if (looser == "my") {
        console.log("entered mydefeat");
        setBattleMessage(
          "You lost. Sorry! You get the following item: +1 Coupon for Pokecenter"
        );
      }
      if(looser == "enemy") {
        console.log("entered enemydefeat");
        let rewardString = "";
        if (!user.collectedCards.some((c) => c === enemyPokemon.orderNumber)) {
          let collectedCards = user.collectedCards;
          collectedCards.push(enemyPokemon.orderNumber);
          await setUser((prev) => ({ ...prev, collectedCards }));
          const newPokemon = {
            name : enemyPokemon.name,
            orderNumber : enemyPokemon.orderNumber,
            level : enemyPokemon.level,
            attack : enemyPokemon.attack,
            attackValue : enemyPokemon.attackValue,
            defenseValue : enemyPokemon.defenseValue,
            health : enemyPokemon.health,
            currentHealth : enemyPokemon.health,
            xp : 0,
            type : enemyPokemon.type,
            predecessor : enemyPokemon.predecessor,
            successor : enemyPokemon.successor,
            ownerId : user.id,
            imgFront : enemyPokemon.imgFront,
            imgBack : enemyPokemon.imgBack,
            imgCard : enemyPokemon.imgCard
          }
          const res = await axios.post(
            `http://localhost:8765/pokemon/`,
            {...newPokemon}
          );
          console.log(res);
          rewardString += "1x " + enemyPokemon.name + ",";
        }
        const randomChose = await Math.floor(Math.random() * 3);

        switch (randomChose) {
          case 0: {
            let defenseBatches = user.defenseBatches + 1;
            await setUser((prev) => ({ ...prev, defenseBatches }));
            rewardString += " 1x DefenseBatch,";
            break;
          }
          case 1: {
            let attackBatches = user.attackBatches + 1;
            await setUser((prev) => ({ ...prev, attackBatches }));
            rewardString += " 1x AttackBatch,";
            break;
          }
          case 2: {
            let bonbons = user.bonbons + 1;
            await setUser((prev) => ({ ...prev, bonbons }));
            rewardString += " 1x Bonbon,";
            break;
          }
        }
        let xp = user.xp + 100;
        await setUser((prev) => ({ ...prev, xp }));
        rewardString += " +100 XP";

        let pokexp = primaryPokemon.xp + 50;
        await setPrimaryPokemon((prev) => ({ ...prev, xp: pokexp }));
        await setBattleMessage(
          "You WIN! You get the following rewards: " + rewardString.trim()
        );
      }

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      console.log(error);
    }

    // await setBattleMessage("Battle over!");
  };

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
