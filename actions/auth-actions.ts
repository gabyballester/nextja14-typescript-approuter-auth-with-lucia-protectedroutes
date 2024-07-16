"use server";

import { redirect } from "next/navigation";
import { SignupFormStateErrors, SignupFormState } from "@/components";
import { createUser, hashUserPassword } from "@/services";
import Database from "better-sqlite3";

export const signup = async (
  _prevState: SignupFormStateErrors,
  formData: FormData
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: SignupFormState = {
    email: "",
    password: "",
  };

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  console.log({ errors });

  if (errors.email || errors.password) {
    return {
      errors,
    };
  }

  const hashedPassword = hashUserPassword(password);

  try {
    createUser(email, hashedPassword);
  } catch (error) {
    if (error instanceof Database.SqliteError) {
      if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
        return {
          errors: {
            ...errors,
            email:
              "It seems like an account for the chosen email already exists.",
          },
        };
      }
    }
    throw error;
  }
  // store it in the database (create a new user)
  redirect("/training");
};
