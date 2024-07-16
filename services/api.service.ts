import { Training } from "@/types";
import db from "./db.service";

export const getTrainings = (): Training[] => {
  const stmt = db.prepare("SELECT * FROM trainings");
  return stmt.all() as Training[];
};

export const createUser = (email: string, password: string) => {
  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, password);
  return result.lastInsertRowid;
};
