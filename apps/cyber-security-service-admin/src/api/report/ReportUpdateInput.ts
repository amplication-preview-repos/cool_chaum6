import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ReportUpdateInput = {
  content?: string | null;
  status?: "Option1" | null;
  project?: ProjectWhereUniqueInput | null;
};
