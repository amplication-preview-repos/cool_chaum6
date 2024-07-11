import { ProjectCreateNestedManyWithoutClientsInput } from "./ProjectCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  name?: string | null;
  email?: string | null;
  company?: string | null;
  phone?: string | null;
  projects?: ProjectCreateNestedManyWithoutClientsInput;
};
