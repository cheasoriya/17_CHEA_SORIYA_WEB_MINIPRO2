import Link from "next/link";
import React from "react";

export default function SidebarComponent({ getspace }) {
  return (
    <div>
      <Link href="/Hello world">{getspace?.payload?.workspaceName}</Link>
    </div>
  );
}
