import { ProjectUpdateManyWithoutClientsInput } from "./ProjectUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  name?: string | null;
  email?: string | null;
  company?: string | null;
  phone?: string | null;
  projects?: ProjectUpdateManyWithoutClientsInput;
};
