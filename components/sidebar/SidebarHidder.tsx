import React from 'react'
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { toggle } from '../../slices/sidebarSlice'

type Props = {  

}

const SidebarHidder = (props: Props) => {
  const dispatch = useDispatch();
  
  return (
    <div onClick={() => dispatch(toggle())} className="flex flex-row ">
        <Image
            
            width={24}
            height={24}
            src="/assets/icon-hide-sidebar.svg"
            className="ml-2 mr-2"
            alt="Logo"
          />
        <p>Hide sidebar</p>
        </div>
  )
}

export default SidebarHidder