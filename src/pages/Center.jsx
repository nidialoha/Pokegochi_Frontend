import { useAuth } from "../Context/AuthProvider";
import { FaHeart } from "react-icons/fa";
import XPBar from "../components/XPBar";
import HealthBar from "../components/HealthBar";

function Center() {
  const { user, setUser, primaryPokemon, setPrimaryPokemon } = useAuth();

  const handleHeal = async () => {
    let currentHealth = primaryPokemon.health;
    await setPrimaryPokemon((prev) => ({
      ...prev,
      currentHealth,
    }));
    let coupons = user.coupons - 1;
    await setUser((prev) => ({
      ...prev,
      coupons,
    }));
  };

  return (
    <>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/PokemonCenter.png')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 flex justify-center">
        <XPBar currentXP={user.xp} maxXP={10000} />
      </div>

      <div className="mb-1 animate-bounce-in flex flex-col items-center">
        <div className="mt-45 w-40 flex items-end z-20 gap-2 static">
          <HealthBar
            currentHealth={primaryPokemon.currentHealth}
            maxHealth={primaryPokemon.health}
          />
          <span className="text-sm font-semibold text-center text-white bg-red-500 h-14 w-20 px-3 py-1 rounded-full flex items-center justify-center ">
            Lvl. {primaryPokemon.level}
          </span>
        </div>
        <img
          src={primaryPokemon.imgFront}
          alt="MyPokemon"
          className="w-96 h-auto relative z-20"
        />
      </div>

      <div className="">
        {/* Buttons unten */}
        <div className="fixed bottom-20 flex justify-between mb-8 mx-20 gap-4 z-40">
          {/* Fütterungs-Button */}
          <button
            disabled={
              user.coupons == 0 ||
              primaryPokemon.currentHealth == primaryPokemon.health
                ? true
                : false
            }
            onClick={() => handleHeal()}
            className="w-15 h-15 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"
          >
            <FaHeart className="size-8" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Center;
