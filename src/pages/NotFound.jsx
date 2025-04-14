import React from "react";

function NotFound() {
  return (
    <>
      <div className="fixed inset-0 z-0 object-left">
        <div className="absolute inset-0 bg-[url('/PokemonRoom.png')] bg-cover bg-center filter blur-sm scale-105" />
      </div>
      <div className="container relative z-10 flex items-center justify-center h-screen">
        <h2 className="text-black font-black text-4xl text-center">
          Oops... 404 Page not found...
        </h2>
      </div>
    </>
  );
}

export default NotFound;
