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
  filteredCoffees?: Coffee[];
  getCoffees?: () => void;
  applyFilter?: (tags: string[]) => void;
}

export const AppContext = createContext({} as IAppContext);

export function AppContextProvider({ children }: IAppContextProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([...data]);
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>([]);

  const getCoffees = () => {
    setCoffees(data);
    setFilteredCoffees([]);
  };

  const applyFilter = (tags: string[]) => {
    const filteredCoffees = data.filter((coffee) =>
      coffee.tags.some((tag) => tags.includes(tag))
    );

    console.log("filteredCoffees", filteredCoffees);
    setFilteredCoffees(filteredCoffees);
  };

  return (
    <AppContext.Provider value={{ coffees, filteredCoffees, getCoffees, applyFilter }}>
      {children}
    </AppContext.Provider>
  );
}
