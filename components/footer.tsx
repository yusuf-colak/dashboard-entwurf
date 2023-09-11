import React from "react";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="flex justify-center py-6 bg-sky-950 text-white font-light	  ">
      <div className=" flex justify-between	 items-center lg:w-4/6 w-11/12 flex-wrap">
        <p className="m-2">
          © JURADIREKT PARTNER-DASHBOARD / 2023 / VERSION 2.1 / Stand 25.08.2023
        </p>
        <Badge variant="destructive" className="mr-4 m-2 ">
          Zu meinem JURA DIREKT Kundenportal
        </Badge>
        <div className="flex m-2">
          <p>Datenschutzerklarung</p>
          <p>Impressum</p>
          <p>AGR</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
