import { Client } from "../client/Client";
import { Report } from "../report/Report";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  status?: "Option1" | null;
  name: string | null;
  client?: Client | null;
  reports?: Array<Report>;
};
