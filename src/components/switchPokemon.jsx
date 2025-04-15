const mockPokemons = [
  {
    name: "Charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    name: "Bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    name: "Squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
];

const SwitchPokemonMenu = ({ onClose }) => {
  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-xl text-center w-72">
        <h2 className="text-lg font-bold mb-4">Choose your Pokemon!</h2>
        <div className="space-y-3">
          {mockPokemons.map((poke, idx) => (
            <button
              key={idx}
              className="flex items-center gap-2 p-2 bg-blue-100 hover:bg-blue-200 w-full rounded transition"
              onClick={() => {
                // TODO: Pokémon setzen
                console.log("Gewählt:", poke.name);
                onClose();
              }}
            >
              <img src={poke.image} alt={poke.name} className="w-8 h-8" />
              {poke.name}
            </button>
          ))}
        </div>
        <button
          className="mt-4 text-red-600 underline cursor-pointer"
          onClick={onClose}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default SwitchPokemonMenu;
