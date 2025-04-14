import Card from "../components/Card";
function Dashboard() {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/PokemonRoom.png')] bg-cover bg-center filter blur-sm scale-105" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-items-center min-h-screen mt-20 gap-6">
        <h1 className=" text-black font-black text-2xl">
          Welcome back, "Username"!
        </h1>
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
            <h2 className="text-xl text-center">Card Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-4">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            {/* {pokemonList.map((pokemon) => (
              <Card key={pokemon.id} data={pokemon} />
            ))} */}
          </div>
        </div>
        <h2 className="text-xl text-center">Badges</h2>
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
      </div>
    </>
  );
}

export default Dashboard;
