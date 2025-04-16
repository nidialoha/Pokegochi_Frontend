import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthProvider";

const UserAssets = ({ onClose }) => {
  const { user, setUser, primaryPokemon, setPrimaryPokemon, setUserAssets } =
    useAuth();

  const [loading, setLoading] = useState(true);
  const [availableItems, setAvailableItems] = useState([]);

  const allItems = [
    {
      label: "BonBons",
      key: "bonbons",
      level: +1,
      xpCost: 0,
      image: "/HeartLife.svg",
    },
    {
      label: "Coupons",
      key: "coupons",
      currentHealth: +20,
      xpCost: 0,
      image: "/Strom.svg",
    },
  ];

  useEffect(() => {
    const fetchUserItems = async () => {
      try {
        const res = await axios.get(`/users/${user.id}`);
        const userData = res.data.data;

        const filteredItems = allItems.filter((item) => userData[item.key] > 0);

        setAvailableItems(filteredItems);
        setUser(userData);
        setPrimaryPokemon(userData.primaryPokemon);
        setUserAssets({
          bonbons: userData.bonbons,
          coupons: userData.coupons,
        });
      } catch (err) {
        console.error("❌ Fehler beim Laden der Userdaten:", err);
        alert("Fehler beim Laden deiner Items.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserItems();
  }, []);

  const handleHeal = async (item) => {
    const itemCount = user[item.key];

    if (itemCount <= 0) {
      alert("Du hast dieses Item nicht mehr!");
      return;
    }

    const newHealth = Math.min(
      primaryPokemon.currentHealth + item.health,
      primaryPokemon.health
    );

    try {
      const res = await axios.put(`/api/users/${user.id}`, {
        ...user,
        [item.key]: itemCount - 1,
        primaryPokemon: {
          ...primaryPokemon,
          currentHealth: newHealth,
        },
      });

      const updatedUser = res.data.data;

      setUser(updatedUser);
      setPrimaryPokemon(updatedUser.primaryPokemon);
      setUserAssets({
        bonbons: updatedUser.bonbons,
        coupons: updatedUser.coupons,
      });

      onClose();
    } catch (err) {
      console.error("❌ Fehler beim Heilen:", err);
      alert("Beim Heilen ist ein Fehler aufgetreten.");
    }
  };

  if (loading) return null;

  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-xl text-center w-80">
        <h2 className="text-lg font-bold mb-4">Heile dein Pokémon</h2>

        {availableItems.length === 0 ? (
          <p className="text-gray-500">Du hast keine Heil-Items.</p>
        ) : (
          <div className="space-y-3">
            {availableItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleHeal(item)}
                className="w-full p-3 bg-green-100 rounded hover:bg-green-200 transition cursor-pointer flex gap-4 items-center justify-start"
              >
                <img src={item.image} alt={item.label} className="w-8 h-8" />
                <span className="text-left">
                  {item.label} – ❤️ +{item.health}
                </span>
              </button>
            ))}
          </div>
        )}

        <button
          className="mt-4 text-red-600 underline cursor-pointer"
          onClick={onClose}
        >
          Schließen
        </button>
      </div>
    </div>
  );
};

export default UserAssets;
