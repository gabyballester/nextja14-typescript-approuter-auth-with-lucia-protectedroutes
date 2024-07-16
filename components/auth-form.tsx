"use client";

import Link from "next/link";
import { FieldType, FormField } from "./form-field";
import { signup } from "@/actions";
import { useFormState } from "react-dom";

const fields: FieldType[] = [
  { label: "Email", type: "email", name: "email", id: "email" },
  { label: "Password", type: "password", name: "password", id: "password" },
];

export type FormState = {
  email: string;
  password: string;
};

export type Errors = {
  errors: FormState;
};

const initialSignupState: Errors = {
  errors: {
    email: "",
    password: "",
  },
};

export const AuthForm = () => {
  const [formState, formAction] = useFormState(signup, initialSignupState);

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
          {(Object.keys(formState.errors) as Array<keyof FormState>).map(
            (error) => (
              <li key={error}>{formState.errors[error]}</li>
            )
          )}
        </ul>
      )}
      <p>
        <button type="submit">Create Account</button>
      </p>
      <p>
        <Link href="/">Login with existing account.</Link>
      </p>
    </form>
  );
};
