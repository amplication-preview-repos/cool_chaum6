import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ReportCreateNestedManyWithoutProjectsInput } from "./ReportCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  status?: "Option1" | null;
  name?: string | null;
  client?: ClientWhereUniqueInput | null;
  reports?: ReportCreateNestedManyWithoutProjectsInput;
};
