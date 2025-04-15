import React, { useState } from "react";
import XPBar from "../components/XPBar";
import HealthBar from "../components/HealthBar";
import FeedMenu from "../components/FeedMenu";
import SwitchPokemonMenu from "../components/switchPokemon";
import { CgPokemon } from "react-icons/cg";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useAuth } from "../Context/AuthProvider";

function Home() {
  const { primaryPokemon } = useAuth();

  const [showFeedMenu, setShowFeedMenu] = useState(false);
  const [showSwitchMenu, setShowSwitchMenu] = useState(false);
  // console.log(primaryPokemon.imgFront);
  return (
    <>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/PokemonRoom.png')] bg-cover bg-center scale-105" />
      </div>

      <div className="relative z-10 flex justify-center">
        <XPBar
          currentXP={7000000}
          maxXP={10000000}
          icon="/Strom.svg" // dein eigenes Bild
        />
      </div>

      <div className="mb-1 animate-bounce-in flex flex-col items-center">
        <div className="mt-30 w-40 flex items-end z-20 gap-2 static">
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
            onClick={() => setShowFeedMenu(true)}
            className="w-15 h-15 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"
          >
            <GiForkKnifeSpoon className="size-8" />
          </button>

          {/* Wechsel-Button */}
          <button
            onClick={() => setShowSwitchMenu(true)}
            className="w-15 h-15 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"
          >
            <CgPokemon className="size-8" />
          </button>
        </div>

        {/* Menü für Füttern */}
        {showFeedMenu && <FeedMenu onClose={() => setShowFeedMenu(false)} />}

        {/* Menü für Wechseln */}
        {showSwitchMenu && (
          <SwitchPokemonMenu onClose={() => setShowSwitchMenu(false)} />
        )}
      </div>
    </>
  );
}

export default Home;
