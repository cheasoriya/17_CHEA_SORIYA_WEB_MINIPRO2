import CardComponent from "@/components/card";
import { getTaskByIdService } from "@/services/getTaskByIdService";
import React from "react";

export default async function TaskComponent({ params }) {
  const { id } = await params;

  const getTaskById = await getTaskByIdService(id);

  console.log(getTaskById?.payload);
  return (
    <div>
      {getTaskById?.payload?.map((getTask) => (
        <CardComponent key={getTask?.taskId} spaceId={getTask} />
      ))}
    </div>
  );
}
