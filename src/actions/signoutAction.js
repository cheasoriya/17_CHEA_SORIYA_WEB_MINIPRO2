"use server";

import { signOut } from "@/auth";

export const signedOutUser = async (formData) => {
  console.log("Form", formData);

  await signOut("credentials", {
    redirectTo: "/login/",
  });
};
