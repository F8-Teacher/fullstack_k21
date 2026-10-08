import { createContext } from "react";
type AppContextData = {
  message: string;
  setMessage: (data: string) => void;
};
export const AppContext = createContext<AppContextData>({} as AppContextData);
