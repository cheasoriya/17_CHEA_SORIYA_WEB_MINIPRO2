const { auth } = require("@/auth");

const headerToken = async () => {
  const session = await auth();

  return {
    "content-Type": "application/json",
    Authorization: `Bearer ${session?.user?.token}`,
  };
};
export default headerToken;