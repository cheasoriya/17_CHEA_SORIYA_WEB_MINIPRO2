import React from "react";
import ProfileComponent from "./profile";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function NavbarComponent({ getspacebookId }) {
  console.log(" ", getspacebookId);
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-5">
        <Link href="#" className="text-xl text-gray-700">
          Workspace
        </Link>
        <ChevronRight className="text-xl text-gray-700" />
        <p className="text-xl text-gray-700">
          {getspacebookId?.payload?.workspaceName}
        </p>
      </div>
      <ProfileComponent />
    </div>
  );
}
