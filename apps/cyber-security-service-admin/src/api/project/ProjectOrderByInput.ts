import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  name?: SortOrder;
  clientId?: SortOrder;
};
