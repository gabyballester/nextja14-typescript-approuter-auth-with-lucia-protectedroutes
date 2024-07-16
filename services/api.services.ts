import { Training } from "@/types";
import db from "./db.services";

export const getTrainings = (): Training[] => {
  const stmt = db.prepare("SELECT * FROM trainings");
  return stmt.all() as Training[];
};
