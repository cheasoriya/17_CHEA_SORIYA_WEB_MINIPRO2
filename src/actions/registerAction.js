"use server";
export const registerActions = async (formData) => {
  console.log("", formData);

  const getuser = formData?.username;
  const getemail = formData?.email;
  const getpassword = formData?.password;
};
