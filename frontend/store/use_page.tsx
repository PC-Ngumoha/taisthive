import { create } from "zustand";
import { AvailablePaths } from "@/utils/definitions";


interface PageHistoryType {
  prevURL: AvailablePaths;
  setPrevURL: (url: AvailablePaths) => void;
}


const usePageHistory = create<PageHistoryType>()((set) => (
  {
    prevURL: '/',
    setPrevURL: (url) => set((state) => ({ prevURL: url }))
  }
));

export default usePageHistory;