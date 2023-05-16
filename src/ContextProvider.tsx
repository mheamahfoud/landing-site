import {
  FC,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

import React from "react";
import { WithChildren } from "./helpers/react18MigrationHelpers";


type AuthContextProps = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  linkClicked: boolean;
  setLinkClicked: Dispatch<SetStateAction<boolean>>;
};

const initAuthContextPropsState = {
  currentPage: 1,
  setCurrentPage: () => {},
  linkClicked: false,
  setLinkClicked: () => {},
};

export const AuthContext = React.createContext<AuthContextProps>(
  initAuthContextPropsState
);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider : FC<WithChildren> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [linkClicked, setLinkClicked] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{linkClicked,setLinkClicked, currentPage, setCurrentPage }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
