import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ReportUpdateManyWithoutProjectsInput } from "./ReportUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  status?: "Option1" | null;
  name?: string | null;
  client?: ClientWhereUniqueInput | null;
  reports?: ReportUpdateManyWithoutProjectsInput;
};
