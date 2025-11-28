"use client";

import { useSearch } from "@/src/hooks/useSearch";
import Container from "../shared/layout/Container";
import articleInsights from "@/messages/en/blogs.json";
import ArticleCard from "./ArticleCard";
import { useMemo } from "react";

interface ArticleProps {
  img: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

const SearchPage = () => {
  const { searchTerm } = useSearch();
  const articles: ArticleProps[] = articleInsights.blogInsights.articles;

  const filteredArticles = useMemo(() => {
    if (!searchTerm) return articles;
    return articles.filter((a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, articles]);

  return (
    <Container>
      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <ArticleCard
              key={index}
              img={article.img}
              date={article.date}
              title={article.title}
              description={article.description}
              link={article.link}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default SearchPage;
