function Dashboard() {
  return (
    <>
      <div className="bg-[url(/PokemonRoom.png)] bg-fixed h-full w-full fixed sm:fixed md:fixed object-left backdrop-blur-2xs">
        <div className="flex flex-col items-center justify-items-center mt-20 gap-6">
          <h1 className=" text-black font-black text-2xl">
            Welcome back, "Username"!
          </h1>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>

          {/* Platz für XP Bar & Healthbar */}
        </div>

        <div className="gap-6">
          <h2 className="text-xl text-center">Card Collection</h2>
          <h2 className="text-xl text-center">Badges</h2>
        </div>

        {/* <img
          src="PokemonRoom.png"
          alt="pokemon-room-picture"
          className="h-full w-full absolute sm:absolute object-cover md:absolute object-left blur-md"
        /> */}
      </div>
    </>
  );
}

export default Dashboard;
