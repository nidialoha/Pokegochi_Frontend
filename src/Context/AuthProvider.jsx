import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [primaryPokemon, setPrimaryPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async () => {
    await setIsAuthenticated(true);
  };
  console.log("🟢 isAuthenticated:", isAuthenticated); // <-- Debug

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setPrimaryPokemon(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  const saveUser = async () =>{
    const re = await axios.put(`http://localhost:8765/users/${user.id}`, {
      ...user
    });
    console.log(re);
  }

  const savePokemon = async () =>{
    const r = await axios.put(
      `http://localhost:8765/pokemon/${primaryPokemon.id}`,
      {
        ...primaryPokemon
      }
    );
    console.log(r);
  }

  useEffect(()=>{savePokemon();}, [primaryPokemon])
  useEffect(()=>{saveUser();}, [user])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        user,
        primaryPokemon,
        setUser,
        setPrimaryPokemon,
        saveUser,
        savePokemon
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
