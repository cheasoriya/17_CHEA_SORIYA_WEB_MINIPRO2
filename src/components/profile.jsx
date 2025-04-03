import React from "react";
import Image from "next/image";
import { Bell } from "lucide-react";
import { getUserService } from "@/services/getUserService";
export default async function ProfileComponent() {
  const getUser = await getUserService();

  return (
    <div className="flex gap-5 items-center">
      <Bell className="text-gray-700 " />
      <Image
        src={getUser?.payload?.profile}
        width={50}
        height={50}
        alt="profile image"
        className="rounded-full"
      />
      <div>
        <div>{getUser?.payload?.username}</div>
        <div>{getUser?.payload?.email}</div>
      </div>
    </div>
  );
}
