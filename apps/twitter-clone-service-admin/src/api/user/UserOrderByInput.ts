import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  profilePic?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
