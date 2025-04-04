"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { signoutActions } from "@/actions/singOutAction";
import { LogOut } from "lucide-react";

export default function LogoutButtonComponent() {
  return (
    <form action={signoutActions}>
      {" "}
      {/* just call the sign out function that we have configured in the server action above */}
      <Button className="bg-watermelon-red text-white p-4">
        <LogOut />
        Log out
      </Button>
    </form>
  );
}
