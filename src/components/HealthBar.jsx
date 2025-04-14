const HealthBar = ({ currentHealth, maxHealth }) => {
  const percentage = Math.max(
    0,
    Math.min((currentHealth / maxHealth) * 100, 100)
  );

  // Dynamische Farbe je nach HP-Level
  const getColor = () => {
    if (percentage > 60) return "bg-green-500";
    if (percentage > 30) return "bg-yellow-400";
    return "bg-red-500";
  };

  return (
    <div className="w-full max-w-xs">
      {/* Leiste */}
      <div className="h-4 bg-gray-300 rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor()} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Text */}
      <div className="text-xs text-center mt-1 text-white font-semibold">
        {currentHealth}/{maxHealth} HP
      </div>
    </div>
  );
};

export default HealthBar;
