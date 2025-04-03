import HeaderComponent from "@/components/header";
import Logo from "@/components/logo";
import NavbarComponent from "@/components/navbar";
import StatusComponent from "@/components/status";
import { Dot, Ellipsis, LogOut, PlusSquare, Star } from "lucide-react";
import React from "react";
import Link from "next/link";
import { workspaceByIdService } from "@/services/workspaceByIdService";
import getAllWorkSpace from "@/services/workspaceService";
import CardComponent from "@/components/card";

export default async function workspaceComponent({ params }) {
  const { id } = await params;
  const reses = await workspaceByIdService(id);
  const ress = await getAllWorkSpace();
  return (
    <section className="flex w-full py-10">
      <div className="p-5 text-center w-[25%]  space-y-10">
        <Logo />
        <div className="flex justify-between">
          <h1 className="text-gray-700 font-bold text-2xl">Workspace</h1>
          <PlusSquare className="text-gray-700 font-bold " />
        </div>
        <div>
          {ress?.payload?.map((getres) => (
            <div
              key={getres?.workspaceId}
              className="flex justify-between items-center"
            >
              <Link
                href={getres?.workspaceId}
                className="space-x-5 flex items-center"
              >
                <Dot height={50} width={50} color="#f96666" />
                <p className="text-xl first-letter:uppercase">
                  {getres?.workspaceName}
                </p>
              </Link>
              <Ellipsis />
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <h1 className="text-gray-700 font-bold text-2xl">Favorite</h1>
          <Star className="text-gray-700 font-bold " />
        </div>
        <Link
          href="/login"
          className="flex gap-5 bg-watermelon-red p-3 w-40 justify-center rounded-2xl text-white"
        >
          <LogOut />
          <p>Log Out</p>
        </Link>
      </div>
      <div className="w-[75%] p-4 space-y-5">
        <NavbarComponent getspacebookId={reses} />
        <HeaderComponent getworkspaceId={reses} />
        <StatusComponent />
        <div className="grid grid-cols-3 gap-20">
          {ress?.payload?.map((getmap) => (
            <CardComponent spaceId={getmap} />
          ))}
        </div>
      </div>
    </section>
  );
}
