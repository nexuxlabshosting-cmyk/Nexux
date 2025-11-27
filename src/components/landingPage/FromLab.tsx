import { useTranslations } from "next-intl";
import ResuableButton from "../shared/layout/Button";
import Container from "../shared/layout/Container";
import blogsData from "../../../messages/en/landing.json";
import Link from "next/link";
import PrimaryButton from "../shared/layout/PrimaryButton";
import ArticleCard from "../Blogs/ArticleCard";
const FromLab = () => {
  const t = useTranslations("landing");
  return (
    <>
      <Container>
        <div className="space-y-4 md:space-y-10 text-center py-[60px]">
          <section className="space-y-3">
            <ResuableButton>
              {t("fromLab.btn_text")}{" "}
              <span className="text-[#E50914]">
                {t("fromLab.color_btn_text")}
              </span>
            </ResuableButton>
            <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
              <span className="text-[#E50914]">{t("fromLab.color_title")}</span>{" "}
              {t("fromLab.title_text")}{" "}
              <span className="text-[#E50914]">
                {t("fromLab.color_title_1")}
              </span>{" "}
              {t("fromLab.title_text_1")}{" "}
              <span className="text-[#E50914]">
                {t("fromLab.color_title_2")}
              </span>{" "}
              {t("fromLab.title_text_2")}
            </h2>
            <p className="text-sm font-normal lg:w-[70%] mx-auto">
              {t("fromLab.description")}
            </p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-start">
            {blogsData.fromLab.blogs.map((item, index) => (
               <ArticleCard
                key={index}
                img={item.img}
                date={item.date}
                title={t(`fromLab.blogs.${index}.title`)}
                description={t(`fromLab.blogs.${index}.description`)}
                link={item.link}
                />
            ))}
          </section>
          <Link href="/blogs/#blog">
            <PrimaryButton>{t("fromLab.seeAllText")}</PrimaryButton>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default FromLab;
