import React from "react";

const TopNavBarCard = ({ bgColor, children }) => {
  return (
    <div
      className={`${bgColor} p-3  flex gap-2 flex-col rounded-lg items-start  `}
    >
      {children}
      <button className="bg-slate-800 px-3 py-2 text-sm font-bold text-slate-50 rounded-md">
        View List
      </button>
    </div>
  );
};

export default TopNavBarCard;
