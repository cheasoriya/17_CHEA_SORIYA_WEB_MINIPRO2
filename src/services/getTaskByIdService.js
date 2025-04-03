import headerToken from "@/lib/headerToken";

export const getTaskByIdService = async (workspaceById) => {
  const headers = await headerToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/tasks/workspace/${workspaceById}`,
    {
      headers,
    }
  );
  const getResponse = await response.json();
  return getResponse;
};
