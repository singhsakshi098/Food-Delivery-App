import { createContext } from "react";

// Named export of UserContext
export const UserContext = createContext({
  loggedInUser: "Default User",
});
