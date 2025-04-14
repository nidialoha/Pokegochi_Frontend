import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../Context/AuthProvider";

function Signup() {
  //   const { setUser, login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { username, email, password } = signupData;

    if (!email.trim() || !password.trim()) {
      setError("Please fill all the fields");
      return;
    }

    // ✅ Falls das Passwort zu kurz ist
    if (password.length < 6) {
      setError("");
      return;
    }
    // ✅ Falls die E-Mail kein "@" enthält (Basic Check)
    if (!email.includes("@")) {
      setError("");
      return;
    }
    setError("");

    navigate("/login");
  };

  const fetchSignup = async () => {
    try {
      const res = await fetch("#", {
        method: "POST",
        body: JSON.stringify({
          username: `${signupData.username}`,
          email: `${signupData.email}`,
          password: `${signupData.password}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw Error("Bad request");
      const data = await res.json();
      console.log(data);
      setUser(data.user);
      await login();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSignup}>
        <div className="bg-[url(/PokemonRoom.png)] bg-fixed h-full w-full sm:absolute object-cover md:absolute object-left blur-md fixed inset-0 z-0"></div>

        <div className="flex flex-col items-center justify-items-center mt-20 gap-6 relative z-10">
          <h1 className=" text-black font-black text-2xl">Signup!</h1>
          <div className="flex flex-col items-center justify-items-center gap-2">
            <input
              type="username"
              name="username"
              placeholder="input your username"
              className="input mb-3"
              value={signupData.username}
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
          <div className="flex justify-center gap-7 mt-6">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 hover:outline-4 outline-red-300">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>

            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 hover:outline-4 outline-red-300">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 hover:outline-4 outline-red-300">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 hover:outline-4 outline-red-300">
                <img
                  className="bg-blue-400"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                />
              </div>
            </div>
          </div>
          <button
            className="mt-6 bg-red-800 rounded-lg h-[35px] w-[100px] text-white hover:bg-red-900 text-center content-center"
            type="submit"
            onClick={fetchSignup}
          >
            Signup
          </button>
        </div>
      </form>
      <div>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
      </div>
      <p>Test</p>
    </>
  );
}

export default Signup;
