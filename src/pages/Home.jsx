import React from "react";
import XPBar from "../components/XPBar";

function Home() {
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
      {/* <img
        src="PokemonRoom.png"
        alt="pokemon-room-picture"
        className="h-full w-full absolute sm:absolute object-cover md:absolute object-right"
      /> */}
    </>
  );
}

export default Home;
