import React from "react";
import LOGO from "../images/logo1.png";
import { SearchIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header
      className="sticky top-0 z-50 gride gride-cols-3 bg-white shadow-md  py-5 px-5 md
    :px-10"
    >
      <div className="relative flex items-center  h-10 cursor-pointer my-auto p-5">
        {/* logo */}
        <img
          src={LOGO}
          alt="logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          width={100}
          height={100}
        />
        {/* search bar */}
        <div className="flex items-center  md:border-2 rounded-full py-2">
          <input
            placeholder="search your best house"
            text="text"
            className="outline-none items-center pl-5 bg-transparent flex-grow  "
          />
          <SearchIcon className=" hidden  md:inline-flex h-8 bg-red-400 text-white rounded-full p-2  cursor-pointer " />
        </div>
        {/* same children with same icons  */}
      </div>
    </header>
  );
}

export default Header;
