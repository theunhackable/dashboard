"use client"
import React, { useState } from "react";
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
const NavMenu = () => {
  const [opened, setOpened] = useState(false)
  return (
    <nav className=" max-md:hidden fixed flex flex-col justify-between max-w-[250px] h-screen bg-main-darker-blue-bg text-white pt-10">
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
