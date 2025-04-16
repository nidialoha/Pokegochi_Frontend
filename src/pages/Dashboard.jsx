import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import { IoIosSettings } from "react-icons/io";
import { useAuth } from "../Context/AuthProvider";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const {user} = useAuth();
  const [pokemonCards, setPokemonCards] = useState([]);
  
  useEffect(()=>{
    const fetchCardPokemon = async ()=>{
      try {
        if(pokemonCards.length==0){
          await user.collectedCards.forEach(async (e)=>{
            const res = await axios.get(`http://localhost:8765/pokemon/${e}`);
            
            setPokemonCards((prev) => ([...prev, res.data]));
           });
           //setPokemonCards(cardArray);
          console.log(pokemonCards);
        }
         
         
      } catch (error) {
        console.log(error);
      }
      
    }
    fetchCardPokemon();

  }, [])
  return (
    <>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/PokemonRoom.png')] bg-cover bg-center filter blur-sm scale-105" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-items-center min-h-screen gap-6 mt-5">
        <div className="relative w-full flex justify-center items-center mt-4">
          <h1 className=" text-black font-black text-3xl text-center w-[300px] text-wrap">
            Welcome back, "{user.name}"!
          </h1>
          <NavLink>
            <IoIosSettings className="size-8 text-black absolute right-8" />
          </NavLink>
        </div>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img
              className="bg-blue-400"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
            />
          </div>
        </div>
        {/* Platz für XP Bar & Healthbar */}

        <div className="gap-6">
          <div>
            <h2 className="text-xl text-center font-black text-black">
              Card Collection
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-4">
              {pokemonCards.map((p, i)=>(<Card key={p.orderNumber} pokemon={p} />)                
              )}
              
            </div>
            {/* {pokemonList.map((pokemon) => (
              <Card key={pokemon.id} data={pokemon} />
            ))} */}
          </div>
        </div>
        <h2 className="text-xl text-center font-black text-black">Badges</h2>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 mt-4">
          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>
          </div>
        </div>
        <NavLink className="w-full container mb-30" to="/hall-of-fame">
          <div className="bg-linear-to-r from-indigo-500 to-blue-400 rounded-2xl">
            <div className=" flex flex-col gap-10 p-10 ">
              <img className="h-[100px]" src="/HallOfFame.svg" alt="fire" />
              <h2 className="text-center text-black font-black text-2xl">
                See hall the fame!
              </h2>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default Dashboard;
