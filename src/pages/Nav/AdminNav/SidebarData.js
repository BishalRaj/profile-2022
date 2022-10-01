import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { GiSkills, GiSpellBook, GiEyeTarget } from "react-icons/gi";
import { BsPersonSquare } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <AiFillDashboard />,
    cName: "a-nav-text",
  },
  {
    title: "About",
    icon: <BsPersonSquare />,
    cName: "a-nav-text",
  },
  {
    title: "Resume",
    icon: <GiSpellBook />,
    cName: "a-nav-text",
  },
  {
    title: "Skills",
    icon: <GiSkills />,
    cName: "a-nav-text",
  },
  {
    title: "View",
    icon: <GiEyeTarget />,
    cName: "a-nav-text",
    path: "/",
  },
  // {
  //   title: "Logout",
  //   icon: <AiIcons.AiOutlineLogout />,
  //   cName: "a-nav-text",
  // },
];
