import React from "react";
import { data } from "../../data";

const TableData = ({ serch, activePage }) => {
  let filterData;
  if (serch === "") {
    // when serch is not applied paginate
    const from = (activePage - 1) * 5; //5 per page
    const to = activePage * 5 - 1;
    filterData = data.filter(
      (item) =>
        data.indexOf(item) >= from &&
        data.indexOf(item) <= to
    );
  } else {
    filterData = data.filter((user) =>
      user.name.includes(serch)
    );
  }

  return (
    <div>
      {filterData.map((user, i) => (
        <div
          key={i}
          className="mb-3 grid grid-cols-[1.3fr_2fr_.8fr_1fr_1.5fr_.8fr_1.3fr_1.5fr] items-center justify-items-center text-sm font-semibold "
        >
          <div className=" text-gray-800  ">
            {user.name}
          </div>
          <div className="py-2 text-gray-800 flex flex-col gap-2  ">
            <span className="mb-1">
              {user.assets.total}
            </span>
            <div className="flex gap-2 font-bold text-xs">
              <span className="px-3 py-1  rounded-3xl text-amber-700 bg-gradient-to-t from-amber-400 to-gray-100">
                {user.assets.gold}
              </span>
              <span className="px-3 py-1  rounded-3xl text-gray-700 bg-gradient-to-t from-gray-400 to-gray-100">
                {user.assets.silver}
              </span>
              <span className="px-3 py-1  rounded-3xl text-blue-700 bg-gradient-to-t from-blue-400 to-gray-100">
                {user.assets.other}
              </span>
            </div>
          </div>
          <div className=" text-gray-800">
            ${user.revenue}
          </div>
          <div className={` text-gray-800  `}>
            <span
              className={`${
                user.kyc === "Done"
                  ? "text-green-600 bg-green-50"
                  : "text-red-400 bg-red-50"
              } px-3 py-1 rounded-2xl`}
            >
              {user.kyc}
            </span>
          </div>
          <div className="text-xs text-gray-800 flex-1  ">
            {user.Facilitator.from} &rarr;
            {user.Facilitator.to}
          </div>
          <div className="text-gray-800  ">{user.zone}</div>
          <div className="text-gray-800  ">
            {user.accType}
          </div>
          <div className="text-gray-800 flex-1  ">
            {user.tpa}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableData;
