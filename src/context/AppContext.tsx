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
  selectedTag?: string;
  coffees: Coffee[];
  filteredCoffees?: Coffee[];
  getCoffees?: () => void;
  applyFilter?: (tags: string[]) => void;
  handleTagSelection: (tag: string) => void;
}

export const AppContext = createContext({} as IAppContext);

export function AppContextProvider({ children }: IAppContextProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([...data]);
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("TODOS");

  const getCoffees = () => {
    setCoffees(data);
    setFilteredCoffees([]);
  };

  const applyFilter = (tags: string[]) => {
    const filteredCoffees = data.filter((coffee) =>
      coffee.tags.some((tag) => tags.includes(tag))
    );

    setFilteredCoffees(filteredCoffees);
  };

  const handleTagSelection = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <AppContext.Provider
      value={{
        coffees,
        filteredCoffees,
        selectedTag,
        getCoffees,
        applyFilter,
        handleTagSelection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
