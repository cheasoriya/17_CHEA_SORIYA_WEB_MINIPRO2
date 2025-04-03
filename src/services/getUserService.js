import headerToken from "@/lib/headerToken";

export const getUserService = async () => {
  const headers = await headerToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/user`,
    {
      headers,
    }
  );
  const getUserResponse = await response.json();
  return getUserResponse;
};
