"use server";

const { signOut } = require("@/auth");

export const signoutActions = async (formData) => {
  await signOut("credentials", {
    redirectTo: "/login/",
  });
};
