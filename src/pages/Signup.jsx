import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

function Signup() {
  const { setUser, login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    primaryPokemon: "",
  });

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const starterPokemons = [
    {
      id: 1,
      name: "Bulbasaur",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      id: 4,
      name: "Charmander",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 7,
      name: "Squirtle",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 25,
      name: "Pikachu",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupData;

    if (!name.trim() || !email.trim() || !password.trim()) {
      // setError("Please fill all the fields");
      toast.error("Please fill all the fields.");
      return;
    }

    // ✅ Falls das Passwort zu kurz ist
    if (password.length < 6) {
      // setError("Password must be at least 6 characters");
      toast.error("Password must be at least 6 characters");
      return;
    }
    // ✅ Falls die E-Mail kein "@" enthält (Basic Check)
    if (!email.includes("@")) {
      // setError("Invalid email address");
      toast.error("Invalid email address");
      return;
    }

    if (!selectedPokemon) {
      // setError("Please choose your starter Pokemon");
      toast.error("Please choose your starter Pokemon");
      return;
    }
    setError("");
    toast.success("User successfully created! Please log in again!");
    await fetchSignup();
    navigate("/login");
  };

  const fetchSignup = async () => {
    try {
      const res = await fetch("http://localhost:8765/users/signup", {
        method: "POST",
        body: JSON.stringify({
          name: signupData.name,
          email: signupData.email,
          password: signupData.password,
          primaryPokemon: signupData.primaryPokemon,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw Error("Bad request");
      const data = await res.json();
      console.log(data);
      localStorage.setItem("token", data.token);

      setUser(data.user);
      await login();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Toaster />
      <form onSubmit={handleSignup}>
        <div className="bg-[url(/PokemonRoom.png)] bg-fixed h-full w-full sm:absolute object-cover md:absolute object-left blur-md fixed inset-0 z-0"></div>

        <div className="flex flex-col items-center justify-items-center mt-20 gap-6 relative z-10">
          <h1 className=" text-black font-black text-2xl">Signup!</h1>
          <div className="flex flex-col items-center justify-items-center gap-2">
            <input
              type="text"
              name="name"
              placeholder="Input your name"
              className="input mb-3"
              value={signupData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="input your email"
              className="input mb-3"
              value={signupData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="input your password"
              className="input mb-3"
              value={signupData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <h2 className="text-xl text-black font-black">
              Choose your house pokemon:
            </h2>
          </div>
          <div>
            <div className="flex justify-center gap-7 mt-3">
              {starterPokemons.map((poke) => (
                <div
                  key={poke.id}
                  className={`avatar cursor-pointer ${
                    selectedPokemon === poke.id
                      ? "outline-4 outline-red-500 rounded-full ring ring-offset-2"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedPokemon(poke.id);
                    setSignupData((prev) => ({
                      ...prev,
                      primaryPokemon: poke.id,
                    }));
                  }}
                >
                  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                    <img
                      className="bg-blue-400"
                      src={poke.sprite}
                      alt={poke.name}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {error && (
            <p className="text-red-600 font-semibold bg-white p-3 rounded-lg text-center">
              {error}
            </p>
          )}
          <button
            className="mt-2 bg-red-800 rounded-lg h-[35px] w-[100px] text-white hover:bg-red-900 text-center content-center"
            type="submit"
          >
            Signup
          </button>
          <p className=" mb-6 text-white">
            You have an account already? here{" "}
            <NavLink className=" underline hover:text-pink-500" to="/login">
              {" "}
              login!
            </NavLink>{" "}
          </p>
        </div>
      </form>
    </>
  );
}

export default Signup;
