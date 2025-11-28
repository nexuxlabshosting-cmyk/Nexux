"use client";

import Container from "../shared/layout/Container";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface ArticleItem {
  img: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

interface FeaturedArticleProps {
  articles: ArticleItem[];
}

const FeaturedArticle = ({ articles }: FeaturedArticleProps) => {
  const t = useTranslations("blogs.featuredArticle");
  if (!articles || articles.length === 0) return null;
  return (
    <section className="bg-white py-10 md:py-15" id="blog">
      <Container>
        <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 mb-8">
          {t('title.text1')} <span className="text-[#E50914]">{t('title.color1')}</span>
        </h2>
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center md:gap-6 max-md:border rounded-2xl w-full overflow-hidden"
            >
              <Image
                src={article.img}
                alt={article.title}
                width={1200}
                height={400}
                className=" max-md:rounded-t-2xl w-full xl:w-auto md:rounded-2xl h-[250px] xl:h-[350px] object-cover"
              />
              <div className="p-6 flex flex-col justify-between space-y-2 md:space-y-6">
                <p className="text-[#E53935] text-base font-semibold">
                  {article.date}
                </p>
                <h3 className="text-xl md:text-3xl font-bold">
                  {article.title}
                </h3>
                <p className="text-[#4A5565]">{article.description}</p>
                <Link href={article.link}>
                  <div className="text-base text-[#E53935] flex gap-2 items-center font-semibold">
                    <span>Read more</span>
                    <ArrowRightIcon size={16} />
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </Container>
    </section>
  );
};

export default FeaturedArticle;
