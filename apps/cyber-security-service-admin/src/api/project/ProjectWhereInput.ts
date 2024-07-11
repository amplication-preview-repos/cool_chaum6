import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  status?: "Option1";
  name?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  reports?: ReportListRelationFilter;
};
