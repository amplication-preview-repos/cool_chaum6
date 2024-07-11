import { Project } from "../project/Project";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  company: string | null;
  phone: string | null;
  projects?: Array<Project>;
};
