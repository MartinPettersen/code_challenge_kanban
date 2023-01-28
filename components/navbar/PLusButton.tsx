import React from 'react'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { toggle } from '../../slices/newTaskSlice'

type Props = {

}

const PLusButton = (props: Props) => {
  const dispatch = useDispatch();


  return (
    <div onClick={() => dispatch(toggle())} className="flex flex-row bg-[#635FC7] p-2 pr-3 pl-3 rounded-3xl">
        <Image className="md:hidden" src="/assets/icon-add-task-mobile.svg" width={12} height={12} alt="add" />
        <p className="hidden md:block text-[#ffffff]">+Add New Task</p>
    </div>
  )
}

export default PLusButton