import { useSearch } from "@/src/hooks/useSearch"
import Container from "../shared/layout/Container";
import articleInsights from "@/messages/en/blogs.json";
import ArticleCard from "./ArticleCard";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const SearchPage = () => {
    const {searchTerm, setSearchTerm} = useSearch();
    const [filteredArticles, setFilteredArticles] = useState<any>([]); 
    const articles = articleInsights.blogInsights.articles;
    const t = useTranslations("blogs.blogInsights");
    useEffect(() => {
          const filtered = articles.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setFilteredArticles(filtered);
    }, [searchTerm, articles])
  return (
    <Container>
    <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
            {filteredArticles.map((article:any, index:number) => (
              <ArticleCard
                key={index}
                img={article.img}
                date={t(`articles.${index}.date`)}
                title={t(`articles.${index}.title`)}
                description={t(`articles.${index}.description`)}
                link={article.link}
              />
            ))}
          </div>
    </section>
    </Container>
  )
}

export default SearchPage