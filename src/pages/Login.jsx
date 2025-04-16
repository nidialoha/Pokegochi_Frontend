import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const { setUser, login, setPrimaryPokemon } = useAuth();

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    if (!email.trim() || !password.trim()) {
      setError("Please fill all the fields");
      toast.error("Please fill all the fields.");
      return;
    }

    // ✅ Falls die E-Mail kein "@" enthält (Basic Check)
    if (!email.includes("@")) {
      setError("");
      toast.error("Please use @.");
      return;
    }

    setError("");
    toast.success("Now catch some Pokemon!");
    // await login();
    // navigate("/");
  };

  const fetchLogin = async () => {
    try {
      const res = await fetch("http://localhost:8765/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw Error("Bad request");
      const data = await res.json();
      localStorage.setItem("token", data.token);
      const resPokemon = await axios.get(
        `http://localhost:8765/pokemon/${data.user.primaryPokemon}`
      );
      setPrimaryPokemon(resPokemon.data);
      setUser(data.user);
      await login();
      navigate("/loading");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Toaster />
      <form onSubmit={handleLogin}>
        <div className="bg-[url(/PokemonRoom.png)] bg-fixed h-full w-full sm:absolute object-cover md:absolute object-left blur-md fixed inset-0 z-0"></div>

        <div className="flex flex-col items-center justify-items-center mt-20 gap-6 relative z-10">
          <h1 className=" text-black font-black text-2xl">Login!</h1>
          <div className="flex flex-col items-center justify-items-center gap-2">
            <input
              type="email"
              name="email"
              placeholder="input your email"
              className="input mb-3"
              value={loginData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="input your password"
              className="input mb-3"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>

          <button
            className="mt-6 bg-red-800 rounded-lg h-[35px] w-[100px] text-white hover:bg-red-900 text-center content-center cursor-pointer"
            type="submit"
            onClick={fetchLogin}
          >
            Login
          </button>
          <p className="text-white mb-6">
            You don't have an account? here{" "}
            <NavLink className="underline hover:text-pink-700" to="/signup">
              {" "}
              signup!
            </NavLink>{" "}
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
