import Container from "../shared/layout/Container";
import { useTranslations } from "next-intl";
import benifitsData from "../../../messages/en/career.json";
import ResuableButton from "../shared/layout/Button";
import { Card } from "../shared/layout/Card";
const Benifits = () => {
  const t = useTranslations("career");
  return (
    <section className="py-15">
      <Container>
        <div className="space-y-4 md:space-y-10 ">
          <section className="text-center space-y-2">
            <ResuableButton>
              {t("bp.title")}{" "}
              <span className="text-[#E50914]">{t("bp.colortitle")}</span>
            </ResuableButton>
            <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
              {t("bp.heading")}{" "}
              <span className="text-[#E50914]">{t("bp.colorheading")}</span>{" "}
              {t("bp.heading_1")}{" "}
              <span className="text-[#E50914]">{t("bp.colorheading_1")}</span>
            </h2>
            <p className="font-normal leading-6 text-[15px] md:text-base">
              {t("bp.description")}
            </p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {benifitsData.bp.benifit.map((item, index) => (
              <Card
                key={item.title}
                icon={item.icon}
                title={t(`bp.benifit.${index}.title`)}
                paragraph={t(`bp.benifit.${index}.description`)}
              />
            ))}
          </section>
          <p className="text-center font-normal leading-6">
            {t("bp.note")}{" "}
            <span className="text-[#E50914]">{t("bp.colornote")}</span>{" "}
            {t("bp.note_1")}{" "}
            <span className="text-[#E50914]">{t("bp.colornote_1")}</span>{" "}
            {t("bp.note_2")}{" "}
            <span className="text-[#E50914]">{t("bp.colornote_2")}</span>{" "}
            {t("bp.note_3")}{" "}
            <span className="text-[#E50914]">{t("bp.colornote_3")}</span>{" "}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Benifits;
