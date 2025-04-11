import React from "react";

function Signup() {
  return (
    <div>
      <div className="bg-[url(/PokemonRoom.png)] bg-fixed h-full w-full absolute sm:absolute object-cover md:absolute object-left backdrop-blur-md ">
        <div className="flex flex-col items-center justify-items-center mt-20 gap-6">
          <h1 className=" text-black font-black text-2xl">
            Welcome back, "Username"!
          </h1>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <h2 className="text-xl text-black font-black">Signup!</h2>

          <input type="text" placeholder="Username" className="input mb-3" />
          <input type="text" placeholder="Email" className="input mb-3" />
          <input type="text" placeholder="Password" className="input mb-3" />

          <h2 className="text-xl text-black font-black">
            Choose your house pokemon:
          </h2>
        </div>

        {/* <img
          src="PokemonRoom.png"
          alt="pokemon-room-picture"
          className="h-full w-full absolute sm:absolute object-cover md:absolute object-left blur-md"
        /> */}
      </div>
    </div>
  );
}

export default Signup;
