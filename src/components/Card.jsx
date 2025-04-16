function Card(pokemon) {
  console.log("fired Card");
  console.log(pokemon);
  return (
    <>
      <div
        className="bg-yellow-500 rounded-xl  p-4 font-handwriting border border-black
       w-60 shadow-sm hover:scale-105 transition-transform cursor-pointer"
      >
        {/* Header mit Name & HP */}
        <div className="flex justify-between items-center">
          <div className="absolute w-10 h-10 rounded-full overflow-hidden border border-black bg-white">
            <img
              src={pokemon.pokemon.imgFront}
              alt="Mini"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-md font-bold ml-12 mt-2">{pokemon.pokemon.name}</h2>
          <span className="flex text-md font-semibold mt-2 mr-2 items-center">
            <p className="text-xs">HP </p>
            <p className="text-lg">{pokemon.pokemon.health}</p>
          </span>
        </div>

        {/* Bildbereich mit gelbem Hintergrund */}
        <div>
          <div className="relative bg-yellow-200 w-full h-30 rounded-xl mt-3 overflow-hidden border border-black">
            {/* Pokémon Bild */}
            <img
              src={pokemon.pokemon.imgCard}
              alt="Pokemon"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3>
              <span className="font-bold text-[8px] flex justify-center rounded-lg mt-1 bg-slate-200 text-black">
                #{pokemon.pokemon.orderNumber} • Mouse Pokemon • 0,4 m • 6,0 kg
              </span>
            </h3>
          </div>
          {/* Kleiner Kreis oben links für z. B. Icon oder Mini-Bild */}
        </div>

        {/* Beschreibungsteil */}
        <div className="mt-3 px-2 text-sm">
          <div className="flex gap-5">
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full overflow-hidden border border-black">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_Crown-1024.png"
                  alt="Type"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* <p className="font-bold">Typ:</p> */}
            <p className="font-black text-sm">{pokemon.pokemon.type}</p>
          </div>

          {/* <span className="font-bold">Attack:</span>  */}
          <div className="mt-3 flex gap-5">
            <div className="w-5 h-5 rounded-full overflow-hidden border border-black">
              <img
                src="https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_Pokeball-1024.png"
                alt="Extra"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-black text-sm">{pokemon.pokemon.attack}</p>
            <p className="font-black text-sm"> {pokemon.pokemon.attackValue}</p>
          </div>
        </div>

        {/* Trennlinie */}
        <div className="border-t border-black my-4 mx-2"></div>

        {/* Drei kleine runde Bilder unten */}
        <div className="flex justify-end mx-2">
          {/* Entwicklung (z. B. Raichu) */}
          <div>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-black">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/26.png"
                alt="Evolution"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
