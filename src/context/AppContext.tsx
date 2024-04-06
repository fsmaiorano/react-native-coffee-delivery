import { createContext, useState } from "react";

import data from "../data/coffees.json";

export interface Coffee {
  id: number;
  imageSrc: any;
  title: string;
  description: string;
  tags: string[];
  value: number;
  quantity: number;
}

interface IAppContextProps {
  children: React.ReactNode;
}

interface IAppContext {
  coffees: Coffee[];
}

export const AppContext = createContext({} as IAppContext);

export function AppContextProvider({ children }: IAppContextProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([...data]);

  return (
    <AppContext.Provider value={{ coffees }}>{children}</AppContext.Provider>
  );
}
