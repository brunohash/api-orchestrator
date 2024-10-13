import { useContext } from "react";
import { DnDContext } from "../contexts/DnDContext";

export const useDnD = () => {
    const context = useContext(DnDContext);
    if (!context) throw new Error('useDnD must be used within a DnDProvider');
  
    return context;
  };