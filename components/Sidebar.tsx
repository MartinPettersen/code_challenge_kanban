import React from "react";
import data from "../data.json"
import BoardContainer from "./sidebar/BoardContainer";
import DarkLightSwitch from "./sidebar/DarkLightSwitch";
import SidebarHidder from "./sidebar/SidebarHidder";
import SidebarLogo from "./sidebar/SidebarLogo";
;

type Props = {
  setCurrentBoard: Function;

}

const Sidebar = ({setCurrentBoard }: Props) => {
  return (
    <div className="bg-[#ffffff] dark:bg-[#2B2C37]  sticky hidden md:block w-[261px] lg:w-[300px] sidebarToggle:h-[64px] h-[screen] z-19 border border-[#E4EBFA] dark:border-[#3E3F4E] text-[#828FA3]">
      <div className="h-[80%]">
        <SidebarLogo />
        <BoardContainer setCurrentBoard={setCurrentBoard}/>
      </div>
      <div className=" h-[20%] flex flex-col pl-6">
        <DarkLightSwitch  />
        <SidebarHidder />
        </div>
    </div>
  );
};

export default Sidebar;
