const FeedMenu = ({ onClose }) => {
  const feedOptions = [
    { label: "Apple", health: 10, xpCost: 50, image: "/Apple.png" },
    { label: "Honey", health: 15, xpCost: 70, image: "/Honig_Traumwelt.png" },
    {
      label: "Trank",
      health: 20,
      xpCost: 120,
      image: "/Trank_Traumwelt.png",
    },
  ];

  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-xl text-center">
        <h2 className="text-lg font-bold mb-4">
          The best food for your Pokemon!
        </h2>
        <div className="space-y-3">
          {feedOptions.map((option, idx) => (
            <button
              key={idx}
              className="w-full p-3 bg-green-100 rounded hover:bg-green-200 transition cursor-pointer flex gap-5 justify-center items-center"
              onClick={() => {
                // TODO: XP abziehen + Health erhöhen
                console.log("Foods:", option);
                onClose();
              }}
            >
              <img src={option.image} alt={option.label} className="w-8 h-8" />
              <span className="text-left">
                {option.label} - ❤️ +{option.health} | XP: -{option.xpCost}
              </span>
            </button>
          ))}
        </div>
        <button
          className="mt-4 text-red-600 underline cursor-pointer"
          onClick={onClose}
        >
          finish
        </button>
      </div>
    </div>
  );
};

export default FeedMenu;
