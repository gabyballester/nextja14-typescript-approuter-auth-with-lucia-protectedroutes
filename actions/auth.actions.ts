"use server";

import { redirect } from "next/navigation";
import {
  createAuthSession,
  createUser,
  getUserByEmail,
  hashUserPassword,
  verifyPassword,
} from "@/services";
import Database from "better-sqlite3";
import { AuthFormState, AuthFormStateErrors } from "@/types";

export const signupAction = async (
  _prevState: AuthFormStateErrors,
  formData: FormData
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: AuthFormState = {
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

  const hashedPassword = hashUserPassword(password);

  try {
    const id = createUser(email, hashedPassword);
    await createAuthSession(id);
    redirect("/training");
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
};

export const loginAction = async (
  _prevState: AuthFormStateErrors,
  formData: FormData
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: AuthFormState = {
    email: "",
    password: "",
  };

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return {
      errors: {
        ...errors,
        email: "Could not authenticate user, please check your credentials.",
      },
    };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return {
      errors: {
        ...errors,
        password: "Could not authenticate user, please check your credentials.",
      },
    };
  }

  if (errors.email || errors.password) {
    return {
      errors,
    };
  }

  await createAuthSession(existingUser.id);
  redirect("/training");
};

export const authAction = async (
  mode: string,
  prevState: any,
  formData: FormData
) => {
  if (mode === "login") {
    return loginAction(prevState, formData);
  }
  return signupAction(prevState, formData);
};
