import React, { useState } from "react";
import XPBar from "../components/XPBar";
import HealthBar from "../components/HealthBar";
import FeedMenu from "../components/FeedMenu";
import SwitchPokemonMenu from "../components/switchPokemon";
import { CgPokemon } from "react-icons/cg";
import { GiForkKnifeSpoon } from "react-icons/gi";

function Home() {
  const [currentHealth, setCurrentHealth] = useState(30); // Beispiel
  const maxHealth = 150;

  const [showFeedMenu, setShowFeedMenu] = useState(false);
  const [showSwitchMenu, setShowSwitchMenu] = useState(false);
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

      <div className="flex flex-col items-center">
        {/* HealthBar über dem Pokémon */}
        <div className="mt-4 w-40 flex justify-center z-20">
          <HealthBar currentHealth={currentHealth} maxHealth={maxHealth} />
        </div>
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
