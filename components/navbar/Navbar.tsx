"use client"
import { useState } from "react";
import NavMenu from "./NavMenu";
import {BiMenuAltRight} from 'react-icons/bi'

const Navbar = () => {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <div className="max-md:hidden bg-main-darker-blue-bg">
        <NavMenu opened={opened} setOpened={setOpened}/>
      </div>
      {
      !opened &&
      <div className="md:hidden sticky z-10 text-white bg-gray-500 w-full">
        <BiMenuAltRight onClick={() => {setOpened(!opened)}} type='button' size={50} />
      </div> 
      }
      {
      opened && 
      <div onClick={e => {setOpened(!opened)}}>
        <NavMenu opened={opened} setOpened={setOpened} />
      </div>

      }
    </>
  );
};

export default Navbar;
