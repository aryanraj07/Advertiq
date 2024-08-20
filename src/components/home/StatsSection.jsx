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
    <div className="main-container">
      <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Our stats section card goes here */}
        {stats.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-10">
            <h1 className="font-bold text-5xl text-orange ">{item.data}</h1>
            <div className="flex flex-col gap-5">
              <p className="font-semibold text-xl">{item.title}</p>
              <div className="border border-b-2 border-orange w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
