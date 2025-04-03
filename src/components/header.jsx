import { Star } from "lucide-react";
import React from "react";

export default function HeaderComponent({ getworkspaceId }) {
  return (
    <div className="flex justify-between">
      <p className="font-bold text-xl text-gray-700">
        {getworkspaceId?.payload?.workspaceName}
      </p>
      <Star className="h-7 w-7 text-gray-700" />
    </div>
  );
}
