"use server";

import { signIn } from "@/auth";

export const signedInUser = async (formData) => {
  console.log("Form", formData);

  await signIn("credentials", {
    email: formData?.get("email"),
    password: formData?.get("password"),
    redirectTo: "/workspace/**",
  });
};
