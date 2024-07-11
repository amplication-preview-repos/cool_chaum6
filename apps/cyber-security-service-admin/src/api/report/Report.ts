import { Project } from "../project/Project";

export type Report = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  status?: "Option1" | null;
  project?: Project | null;
};
