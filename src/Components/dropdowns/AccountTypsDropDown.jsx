import React from "react";

const AccountTypsDropDown = () => {
  return (
    <div className="text-gray-700 whitespace-nowrap  absolute bg-white top-0 p-3 display flex flex-col gap-3 shadow-lg translate-y-9">
      <div className=" flex gap-3">
        <input type="checkbox" id="bus" />
        <label htmlFor="bus">Business</label>
      </div>
      <div className=" flex gap-3">
        <input type="checkbox" id="payminor" />
        <label htmlFor="payminor">Pay and Use(Minor)</label>
      </div>
      <div className=" flex gap-3">
        <input type="checkbox" id="paymajor" />
        <label htmlFor="paymajor ">
          Pay and Use(Mazor)
        </label>
      </div>
      <div className=" flex gap-3">
        <input type="checkbox" id="salary" />
        <label htmlFor="salary">Salary</label>
      </div>
      <div className=" flex gap-3">
        <input type="checkbox" id="earner" />
        <label htmlFor="earner">Earner</label>
      </div>
    </div>
  );
};

export default AccountTypsDropDown;
