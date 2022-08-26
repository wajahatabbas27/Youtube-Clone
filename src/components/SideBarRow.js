import React from "react";

const SideBarRow = ({ selected, Icon, title }) => {
  return (
    <div
      className={`sideBarRow ${
        selected && "selected"
      } flex items-center py-[10px] px-[20px] hover:bg-gray-300 cursor-pointer`}
    >
      <Icon className='icon text-md sideBarRow_icon' />
      <h4 className='flex-1 ml-[20px] text-sm font-medium sideBarRow_title '>
        {title}
      </h4>
    </div>
  );
};

export default SideBarRow;
