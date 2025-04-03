const { default: headerToken } = require("@/lib/headerToken");

export const workspaceByIdService = async (workspaceById) => {
  const headers = await headerToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspace/${workspaceById}`,
    {
      headers,
    }
  );
  const responses = await response.json();

  return responses;
};
