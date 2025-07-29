const StatCard = ({ value, subtitle, color, icon }) => {
  return (
    <div
      className={`p-6 rounded-lg  shadow-sm dark:shadow-md flex items-center space-x-4 bg-card`}
    >
      <div
        className={`p-3 rounded text-${color}-600 bg-${color}-100 dark:bg-${color}-100`}
      >
        {icon}
      </div>
      <div>
        <p className={`text-3xl font-bold mb-1 text-card-foreground `}>
          {value}
        </p>
        {subtitle && (
          <p className={`text-sm opacity-75 text-card-foreground `}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
