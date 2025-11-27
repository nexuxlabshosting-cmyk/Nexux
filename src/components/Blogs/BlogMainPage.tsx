"use client";
import { createContext, useState } from "react";
import BlogHero from "./BlogHero";
import BlogInsight from "./BlogInsight";
import FeaturedArticle from "./FeaturedArticle";
import SearchPage from "./SearchPage";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const SearchContext = createContext<SearchContextType | null>(null);

const BlogMainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <BlogHero />
      {!searchTerm && (
        <>
          <FeaturedArticle />
          <BlogInsight />
        </>
      )}
      {searchTerm && 
      <SearchPage />
      }
    </SearchContext.Provider>
  );
};

export default BlogMainPage;
