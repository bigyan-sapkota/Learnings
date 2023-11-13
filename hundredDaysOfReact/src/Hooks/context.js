import { createContext, useContext } from "react";
import { User } from "./Mycontext";

export const DashboardContext =
  (createContext < User) | (undefined > undefined);

export function useUserContext() {
  const user = useContext(DashboardContext);

  if (user === undefined) {
    throw new Error("useUseContext  must be used with a DashboardContext.");
  }

  return user;
}
