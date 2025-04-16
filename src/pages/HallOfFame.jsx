import { useState, useEffect } from "react";
import { CgPlayButton } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import axios from "axios";

// const mockData = [
//   {
//     name: "de_nidi",
//     xp: 7000000,
//     avatar:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
//   },
//   {
//     name: "aliens_25",
//     xp: 4543234,
//     avatar:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//   },
//   {
//     name: "pokemaster",
//     xp: 345038,
//     avatar:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
//   },
//   {
//     name: "marioJr",
//     xp: 283321,
//     avatar:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
//   },
//   {
//     name: "johnnyjohn",
//     xp: 400,
//     avatar:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//   },
// ];

const HallOfFamePage = () => {
  const [players, setPlayers] = useState([]);  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const {data: response} = await axios.get('http://localhost:8765/users');
        setPlayers(response);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-blue-300 px-4 pt-4 pb-24">
      <NavLink to="/dashboard">
        <div className="text-sm text-left text-black cursor-pointer mb-2">
          ← Zurück
        </div>
      </NavLink>

      <div className="flex flex-col items-center text-center">
        <img src="/HallOfFame.svg" className="w-12 h-12 text-orange-500 mb-2" />
        <h1 className="text-3xl font-black mb-4 text-black">Hall of Fame!</h1>

        <div className="w-full max-w-md space-y-3">
          {players.map((player, index) => (
            <div
              key={player.name}
              className="flex items-center justify-between bg-white/70 rounded-full px-4 py-2 shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold w-6 text-black">
                  {index + 1}.
                </span>
                
                <span className="font-semibold text-black">{player.name}</span>
              </div>
              <div className="flex items-center gap-1 font-mono font-bold text-black">
                {player.xp.toLocaleString("de-DE")}
                <img src="/Strom.svg" className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (wenn mehr als 5 Spieler) */}
        <div className="mt-6 flex items-center gap-4 text-sm text-white font-semibold">
          <CgPlayButton className="rotate-180 size-10" />

          <span>1 / 1</span>
          <CgPlayButton className=" size-10" />
        </div>
      </div>
    </div>
  );
};

export default HallOfFamePage;
