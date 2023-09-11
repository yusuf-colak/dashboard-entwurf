import React from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import NavbarSVG from "./SVG/navBar";

const Navbar = () => {
  return (
    <Popover>
      <nav className="flex justify-center bg-white py-4 border-b-2 ">
        <div className="flex justify-between sm:flex-wrap lg:w-4/6 w-11/12">
          <div className="flex items-end flex-wrap">
            <h1 className="mr-2 text-3xl font-normal">
              <span className="font-bold">JURA</span>DIREKT
            </h1>
            <h2 className=" text-blue-700 sm:mr-1 mr-7 ">PARTNER-DASHBOARD</h2>
          </div>
          <PopoverTrigger className="xl:hidden block">
            <NavbarSVG />
          </PopoverTrigger>
          <PopoverContent className="w-screen h-screen ">
            <Input placeholder="Glossar" className="w-full " />
            <div className=" flex items-center flex-wrap my-3 justify-center">
              <h2>Vorname Nachname</h2>
              <Avatar className="ml-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </PopoverContent>
          <Input placeholder="Glossar" className="w-[270px] xl:block hidden " />
          <div className=" items-center xl:flex hidden">
            <h2>Vorname Nachname</h2>
            <Avatar className="ml-5">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </Popover>
  );
};

export default Navbar;
