import React, { createContext, useContext, useReducer, ReactNode} from "react";
import { Ionicons } from "@expo/vector-icons";

type Category = {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  name: string;
  isCustom: boolean;
}

const initialCategories: Category[] = [
  
  { id: "1", icon: "bag-outline", color: "white", name: "Mercado", isCustom: false },
  { id: "2", icon: "color-palette-outline", color: "white", name: "Hobby", isCustom: false },
  { id: "3", icon: "airplane-outline", color: "white", name: "Viagem", isCustom: false },
  { id: "3", icon: "apps", color: "white", name: "Mais", isCustom: false },
  
];

type CategoriesAction = 
 | { type: "ADD_CATEGORY"; payload: Category }
 | { type: "DELETE_CATEGORY"; payload: string }
 | { type: "REORDER_CATEGORIES"; payload: Category[]}

 const categoriesReducer = (state: Category[], action: CategoriesAction): Category[] => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return [...state, action.payload];
    case "DELETE_CATEGORY":
      return state.filter(category => category.id !== action.payload);
    case "REORDER_CATEGORIES":
      return action.payload;
    default:
      return state;
  }
 };

 const CategoriesContext = createContext<{categories: Category[]; dispatch: React.Dispatch<CategoriesAction>} | undefined>(undefined);


 export const CategoriesProvider = ({ children}: {children: ReactNode}) => {
  const [categories, dispatch] = useReducer(categoriesReducer, initialCategories);

  return (
    <CategoriesContext.Provider value={{ categories, dispatch }}>
      {children}
    </CategoriesContext.Provider>
  );

 };

 export const useCategories = () => {
  const context = useContext(CategoriesContext);
    if(!context) {
      throw new Error("useCategorie can be used only inside CategoriesProvider")
    }
    return context;
 }