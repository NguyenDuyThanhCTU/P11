import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export type StateContextType = {
  isDropDown: any;
  setDropDown: (dropdown: any) => void;
  isRefetch: any;
  setIsRefetch: (refetch: any) => void;
  isLoading: any;
  setIsLoading: (loading: any) => void;
  isSelected: any;
  setSelected: (selected: any) => void;
  Search: string;
  setSearch: (search: string) => void;
};

export const StateContext = createContext<StateContextType>({
  isDropDown: "",
  setDropDown: () => {},
  isRefetch: "",
  setIsRefetch: () => {},
  isLoading: [],
  setIsLoading: () => {},
  isSelected: 0,
  setSelected: () => {},
  Search: "",
  setSearch: () => {},
});

export const StateProvider = ({ children }: Props) => {
  const [isDropDown, setDropDown] = useState("");
  const [isRefetch, setIsRefetch] = useState("");
  const [isSelected, setSelected] = useState(0);
  const [Search, setSearch] = useState("");
  //custom
  const [isLoading, setIsLoading] = useState(false);

  return (
    <StateContext.Provider
      value={{
        isSelected,
        setSelected,
        isDropDown,
        setDropDown,
        isRefetch,
        setIsRefetch,
        isLoading,
        setIsLoading,
        Search,
        setSearch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
