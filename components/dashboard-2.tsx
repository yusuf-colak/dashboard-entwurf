import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Dashboard_2 = () => {
  return (
    <div className="flex justify-center py-6  ">
      <div className="lg:w-4/6 w-11/12">
        <div className="flex flex-wrap md:justify-evenly justify-between ">
          <Card
            className="max-w-[350px] npx shadcn-ui@latest add popover
  "
          >
            <CardHeader>
              <CardTitle className="tracking-widest font-medium ">
                MARGO
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Hier steht ein zweizeiliger Text. Hier steht ein zweizeiliger
                Text.
              </p>
            </CardContent>
          </Card>
          <Card className="max-w-[370px] my-3">
            <CardHeader>
              <CardTitle className="tracking-widest font-medium">
                KAMPAGNEN-TOOL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Hier steht ein zweizeiliger Text. Hier steht ein zweizeiliger
                Text.
              </p>
            </CardContent>
          </Card>
          <Card className="max-w-[370px] my-3">
            <CardHeader>
              <CardTitle className="tracking-widest font-medium">LEA</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Hier steht ein zweizeiliger Text. Hier steht ein zweizeiliger
                Text.
              </p>
            </CardContent>
          </Card>
          <Card className="max-w-[370px] my-3">
            <CardHeader>
              <CardTitle className="tracking-widest font-medium">
                WEBINARE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Auftrags- ınd Bearbeitungsplattform plus Statistiken</p>
            </CardContent>
          </Card>
          <div className="w-[370px] my-3">
            <Card className="mb-2 py-0">
              <CardHeader>
                <CardTitle className="tracking-widest font-medium">
                  SHOP
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="mb-2">
              <CardHeader>
                <CardTitle className="tracking-widest font-medium">
                  MEDIATHEK
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="mb-2">
              <CardHeader>
                <CardTitle className="tracking-widest font-medium">
                  DOWNLOADS
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
          <Card className="max-w-[370px] my-3 bg-orange-600 text-white">
            <CardHeader>
              <CardTitle className="tracking-widest font-medium">
                WEBINARE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Auftrags- ınd Bearbeitungsplattform plus Statistiken</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_2;
