import React from "react";

const KycDropDown = () => {
  return (
    <div
      className={` text-xs flex flex-col  gap-4 items-start  shadow-lg px-6 py-3  bg-white`}
    >
      <div className="flex gap-3">
        <input id="pending" type="checkbox" />
        <label
          htmlFor="pending"
          className="px-3 py-1 bg-red-100 rounded-2xl"
        >
          Pending
        </label>
      </div>
      <div className="flex gap-3 ">
        <input id="progress" type="checkbox" />
        <label
          htmlFor="progress"
          className="text-xs whitespace-nowrap  px-2 py-1 bg-amber-100 text-amber-400 rounded-2xl"
        >
          In Progress
        </label>
      </div>
      <div className="flex gap-3">
        <input id="done" type="checkbox" />
        <label
          htmlFor="done"
          className="px-3 py-1 bg-green-100 text-green-400 rounded-2xl"
        >
          Done
        </label>
      </div>
      <div className="flex gap-3">
        <input id="rejected" type="checkbox" />
        <label
          htmlFor="rejected"
          className="px-3 py-1 bg-gray-100 text-gray-500  rounded-2xl"
        >
          Rejected
        </label>
      </div>
    </div>
  );
};

export default KycDropDown;
