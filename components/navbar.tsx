import React from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-white py-4 border-b-2 ">
      <div className="flex justify-between lg:w-4/6 w-11/12">
        <div className="flex items-end">
          <h1 className="mr-2 text-3xl font-normal">
            <span className="font-bold">JURA</span>DIREKT
          </h1>
          <h2 className=" text-blue-700 ">PARTNER-DASHBOARD</h2>
        </div>
        <Input placeholder="Glossar" className="w-[270px] " />
        <div className="flex items-center">
          <h2>Vorname Nachname</h2>
          <Avatar className="ml-5">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
