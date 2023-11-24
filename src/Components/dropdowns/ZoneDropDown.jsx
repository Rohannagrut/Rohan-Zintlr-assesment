import React from "react";

const ZoneDropDown = () => {
  return (
    <div className="text-gray-700  absolute bg-white top-0 p-3 display flex flex-col gap-3 shadow-lg translate-y-9">
      <div className=" flex gap-3">
        <input type="checkbox" id="north" />
        <label htmlFor="north">North</label>
      </div>
      <div className=" flex gap-3">
        <input type="checkbox" id="south" />
        <label htmlFor="south">South</label>
      </div>
      <div className=" flex gap-3">
        <input type="checkbox" id="east" />
        <label htmlFor="east">East</label>
      </div>
      <div className=" flex gap-3">
        <input type="checkbox" id="west" />
        <label htmlFor="west">West</label>
      </div>
    </div>
  );
};

export default ZoneDropDown;
