import React from "react";

export default function StatusComponent() {
  return (
    <div className="grid grid-cols-3 gap-20">
      <div className="border-b-2 border-watermelon-red text-watermelon-red text-xl font-bold">
        Not Start
      </div>
      <div className="border-b-2 border-royal-blue text-royal-blue text-xl font-bold">
        In Progress
      </div>
      <div className="border-b-2 border-persian-green text-persian-green text-xl font-bold">
        Finished
      </div>
    </div>
  );
}
