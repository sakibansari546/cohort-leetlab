export default function StatsCard({
  title,
  value,
  description,
  icon,
  color = "primary",
}) {
  
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all">
      <div className="card-body p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="card-title text-lg opacity-70">{title}</h2>
            <p className={`text-3xl font-bold mt-2 text-${color}`}>{value}</p>
            {description && (
              <p className="text-sm mt-2 opacity-60">{description}</p>
            )}
          </div>
          <div className={`rounded-full p-3 bg-${color} bg-opacity-10`}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}
