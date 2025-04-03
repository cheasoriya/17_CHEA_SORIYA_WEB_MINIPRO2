import headerToken from "@/lib/headerToken";

const getAllWorkSpace = async () => {
  const headers = await headerToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspaces`,
    {
      headers,
    }
  );
  const getres = await response.json();
  return getres;
};
export default getAllWorkSpace;
