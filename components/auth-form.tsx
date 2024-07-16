"use client";

import Link from "next/link";
import { FieldType, FormField } from "./form-field";
import { authAction } from "@/actions";
import { useFormState } from "react-dom";
import { AuthFormState, AuthFormStateErrors } from "@/types";

const fields: FieldType[] = [
  { label: "Email", type: "email", name: "email", id: "email" },
  { label: "Password", type: "password", name: "password", id: "password" },
];

const initialSignupState: AuthFormStateErrors = {
  errors: {
    email: "",
    password: "",
  },
};

export const AuthForm = ({ mode }: { mode: string }) => {
  const [formState, formAction] = useFormState(authAction.bind(null, mode), initialSignupState);

  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>

      {fields.map((field, index) => (
        <FormField
          key={index}
          label={field.label}
          type={field.type}
          name={field.name}
          id={field.id}
        />
      ))}
      {formState.errors && (
        <ul id="form-errors">
          {(Object.keys(formState.errors) as Array<keyof AuthFormState>).map(
            (error: keyof AuthFormState) => (
              <li key={error}>{formState.errors[error]}</li>
            )
          )}
        </ul>
      )}
      <p>
        <button type="submit">
          {mode === "login" ? "Login" : "Create Account"}
        </button>
      </p>
      <p>
        {mode === "login" && (
          <Link href="/?mode=signup">Create an account</Link>
        )}
        {mode === "signup" && (
          <Link href="/?mode=login">Login with existing account.</Link>
        )}
      </p>
    </form>
  );
};
