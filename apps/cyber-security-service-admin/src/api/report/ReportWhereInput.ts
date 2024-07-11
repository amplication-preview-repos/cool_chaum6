import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ReportWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  status?: "Option1";
  project?: ProjectWhereUniqueInput;
};
