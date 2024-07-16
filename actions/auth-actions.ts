import { FormState } from "@/components";
import { redirect } from "next/navigation";

export const signup = async (_prevState: any, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log({ _prevState });

  let errors: FormState = {
    email: "",
    password: "",
  };

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (errors.email || errors.password) {
    return {
      errors,
    };
  }

  // store it in the database (create a new user)
  redirect("/training");
};
