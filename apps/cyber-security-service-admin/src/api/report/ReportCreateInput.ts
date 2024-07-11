import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ReportCreateInput = {
  content?: string | null;
  status?: "Option1" | null;
  project?: ProjectWhereUniqueInput | null;
};
