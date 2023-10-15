"use client"

import {
  TbDashboard,
  TbCube,
  TbUser,
  TbWallet,
  TbDiscount,
  TbHelp,
  TbPentagon,
} from "react-icons/tb";
import NavItem from "./NavItem";
import Link from "next/link";
import UserDetails from "../user/UserDetails";
import { AiOutlineClose } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";

const size = 20;
const pages = [
  {
    id: 1,
    title: "Dashboard",
    href: "/dashboard",
    icon: <TbDashboard size={size} />,
  },
  {
    id: 2,
    title: "Product",
    href: "/product",
    icon: <TbCube size={size} />,
  },
  {
    id: 3,
    title: "Customers",
    href: "/customers",
    icon: <TbUser size={size} />,
  },
  {
    id: 4,
    title: "Income",
    href: "/income",
    icon: <TbWallet size={size} />,
  },
  {
    id: 5,
    title: "Promote",
    href: "/promote",
    icon: <TbDiscount size={size} />,
  },
  {
    id: 6,
    title: "Help",
    href: "/help",
    icon: <TbHelp size={size} />,
  },
];

type NavMenuProp = {
  opened: boolean,
  setOpened: Dispatch<SetStateAction<boolean>>
}
const NavMenu = ({opened, setOpened}: NavMenuProp) => {
  return (
    <nav className=" fixed flex flex-col justify-between max-w-[250px] h-screen bg-main-darker-blue-bg text-white pt-10">
      <div className="md:hidden mb-5 mx-2">
      <AiOutlineClose  onClick={() => setOpened(() => !opened)}type='button' className='text-white' size={25}/>

      </div>
      <div id="nav-items">
        <header>
          <div className="flex items-center justify-center gap-2 p-1  mb-5">
            <TbPentagon className="text-2xl" />

            <h1 className="text-2xl font-bold">DashBoard</h1>
          </div>
        </header>

        <div id="options" className="my-10">
          {pages.map((page) => (
            <Link key={page.id} href={page.href}>
              {/* Use on click event to register the active nav item */}
              <NavItem title={page.title} icon={page.icon} />
            </Link>
          ))}
        </div>
      </div>

      <div id="user-details" className="p-2 my-5">
        <UserDetails />
      </div>
    </nav>
  )
}

export default NavMenu
