import React from "react";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      data: "1,00,000+",
      title: "LEADS GENERATED",
    },
    {
      id: 2,
      data: "20+",
      title: "PROJECTS DONE",
    },
    {
      id: 3,
      data: "10+",
      title: "YEARS OF EXPERIENCE",
    },
    {
      id: 4,
      data: "7",
      title: "CITIES AND COUNTING",
    },
  ];
  return (
    <div className="stats-section-container">
      <div className="stats-section-card-container">
        {/* Our stats section card goes here */}
        {stats.map((item) => (
          <div key={item.id} className="stats-section-card">
            <h1 className="font-bold text-5xl text-orange ">{item.data}</h1>
            <p className="font-semibold text-xl">{item.title}</p>
            <div className="border border-b-2 border-white w-2/3"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
