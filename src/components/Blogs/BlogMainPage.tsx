"use client";
import { createContext, useState } from "react";
import BlogHero from "./BlogHero";
import BlogInsight from "./BlogInsight";
import FeaturedArticle from "./FeaturedArticle";
import SearchPage from "./SearchPage";
import articleInsights from "@/messages/en/blogs.json";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const SearchContext = createContext<SearchContextType | null>(null);

const BlogMainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const articles = articleInsights.blogInsights.articles;
  const featureArticle = [articles[0]];
  const insightArticle = articles.slice(1, 7);
  console.log(insightArticle);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <BlogHero />
      {!searchTerm && (
        <>
          <FeaturedArticle articles={featureArticle} />
          <BlogInsight articles={insightArticle} />
        </>
      )}
      {searchTerm && <SearchPage />}
    </SearchContext.Provider>
  );
};

export default BlogMainPage;
