import React from "react";
import { Badge } from "@/components/ui/badge";

const Dashboard_1 = () => {
  return (
    <div className="flex justify-center py-6 ">
      <div className="lg:w-4/6 w-11/12">
        <h1 className="text-md pb-1">
          Kundenportal inkl. Digitaler notfallordner, Testament und
          Nachlassplaner uvm.
        </h1>
        <div className="flex flex-wrap">
          <Badge variant="destructive" className="mr-4 my-1">
            Tutorial abschließen
          </Badge>
          <Badge variant="blue_dark" className="mr-4 my-1">
            Mein JURA DIREKT Kundenportal
          </Badge>
          <Badge variant="blue" className="mr-4 my-1">
            Sie haben noch ungenutzte Vorteile zur Verfügung - Eigene
            Vollmachten zum Sonderpreis
          </Badge>
        </div>
        <h1 className="mt-3 pb-1">schnell-Links für Ihre Kundenakquise</h1>
        <div className="flex flex-wrap ">
          <Badge variant="blue" className="mr-4 my-1">
            Personaklisierte Landşngpage
          </Badge>
          <Badge variant="blue" className="mr-4 my-1">
            Testament-Infoseite
          </Badge>
          <Badge variant="blue" className="mr-4 my-1">
            Stammbaum-Software Landingpage
          </Badge>
          <Badge variant="blue" className="mr-4 my-1">
            Inc möchte einen exklusiven Vortrag für meine Kunden buchen
          </Badge>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard_1;
