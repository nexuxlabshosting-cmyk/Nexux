import { useContext } from "react";
import { SearchContext } from "../components/Blogs/BlogMainPage";

export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
