import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HiddenSidebar from "../components/sidebar/HiddenSidebar";
import SidebarLogo from "../components/sidebar/SidebarLogo";
import styles from "../styles/Home.module.css";
import data from "../data.json"
import NewBoard from "../components/board/NewBoard";
import NewTask from "../components/task/NewTask";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store'
import { selectDarkmode } from "../slices/darkmodeSlice";
import { selectSidebar } from "../slices/sidebarSlice";
import { selectNewTaskToggle } from '../slices/newTaskSlice';
import { selectNewBoardToggle } from '../slices/newBoardSlice';



export default function Home() {
  const [currentBoard, setCurrentBoard] = useState(data.boards.length === 0 ? -1 : 0);

  const darkmodeToggle = useSelector(selectDarkmode)
  const sidebarToggle = useSelector(selectSidebar)
  const newTaskToggle = useSelector(selectNewTaskToggle);
  const newBoardToggle = useSelector(selectNewBoardToggle);

  return (
    <div className="absolute inset-0 ">
      <div className={`z-0 w-full  ${darkmodeToggle && "dark"} `}>
        <Head>
          <title>Kanban Task Managment Challenge Frontend Mentor</title>
          <meta
            name="description"
            content="Frontend Mentor | Kanban task management web app"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./assets/favicon.png"
          />
        </Head>
        <div className="h-full flex flex-row">
          {sidebarToggle ? <Sidebar setCurrentBoard={setCurrentBoard} /> : 
          <HiddenSidebar />
          }

          
          <div className=" h-[100vh]  md:ml-[-261px] lg:ml-[-300px] bg-[#E4EBFA] dark:bg-[#20212C]">
            <Navbar  currentBoard={currentBoard} />
            <Container sidebarToggle={sidebarToggle} currentBoard={currentBoard}/>
            { newBoardToggle ? 
        <div className="w-full h-full fixed inset-0 z-50 "> <NewBoard  /></div>
        :
        <div></div>
      }{ newTaskToggle ? 
        <div className="w-full h-full fixed inset-0 z-50 "> <NewTask /></div>
        :
        <div></div>
      }
          </div>
        </div>
      </div>
    </div>
  );
}
