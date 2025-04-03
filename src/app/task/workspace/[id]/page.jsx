import { getTaskByIdService } from "@/services/getTaskByIdService";
import React from "react";

export default async function TaskComponent() {
  const getTaskById = await getTaskByIdService();
  console.log(" ", getTaskById);
  return;
  <>Hello world</>;
}
