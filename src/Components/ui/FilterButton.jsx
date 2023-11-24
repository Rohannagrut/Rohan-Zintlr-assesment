const FilterButton = ({ type, active, content }) => {
  return (
    <button
      className={`${
        type === "small" ? "px-2 " : " py-2 px-3"
      } ${
        active
          ? "bg-slate-800 text-gray-50"
          : "bg-gray-50 text-slate-800"
      } rounded-md border-[1px] border-slate-800 text-sm font-semibold  `}
    >
      {content}
    </button>
  );
};

export default FilterButton;
