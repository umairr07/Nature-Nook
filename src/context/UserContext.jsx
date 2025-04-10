import { useUser } from "@clerk/clerk-react";
import { createContext } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const { user, isSignedIn, isLoaded } = useUser();

  return (
    <UserContext.Provider value={{ user, isSignedIn, isLoaded }}>
      {children}
    </UserContext.Provider>
  );
};
