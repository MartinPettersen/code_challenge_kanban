import React, { useEffect } from 'react'
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { toggle } from '../../slices/darkmodeSlice';

type Props = {

  }
const DarkLightSwitch = (props: Props) => {
  const dispatch = useDispatch();



  return (
<div className="bg-[#F4F7FD] dark:bg-[#20212C] flex flex-row justify-evenly items-center h-[48px] w-[90%] rounded-md mb-4 mt-4">
        <Image
            onClick={() => dispatch(toggle())}
            width={24}
            height={24}
            src="/assets/icon-light-theme.svg"
            className=""
            alt="Logo"
          />
        <div onClick={() => dispatch(toggle())} className="bg-[#635FC7] pl-1 pr-1 p-1  rounded-3xl flex flex-row items-center justify-evenly">
          <div className="bg-white p-2 mr-6 rounded-full dark:hidden"></div>
          <div className="bg-white p-2 ml-6 rounded-full hidden dark:block"></div>
        
        </div>
        <Image
            onClick={() => dispatch(toggle())}
            width={24}
            height={24}
            src="/assets/icon-dark-theme.svg"
            className=""
            alt="Logo"
          />
        </div>
  )
}

export default DarkLightSwitch