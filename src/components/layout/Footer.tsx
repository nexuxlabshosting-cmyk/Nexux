"use client";
import { useTranslations } from "next-intl";
import Container from "../shared/layout/Container";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";

const Footer = () => {
  const t = useTranslations("common");
  const pathname = usePathname();
  const contactRoute = pathname?.includes("/contact-us");
  const serviceRoute = pathname?.includes("/services");
  const data1 = [
    { label: t("Footer.company.0"), href: "/about" },
    { label: t("Footer.company.1"), href: "/team" },
    { label: t("Footer.company.2"), href: "careers" },
    { label: t("Footer.company.3"), href: "/contact-us" },
  ];
  const data2 = [
    {
      label: t("Footer.services.0"),
      href: serviceRoute ? "#web-development" : "/services/#webdevelopment",
    },
    {
      label: t("Footer.services.1"),
      href: serviceRoute ? "#product-design" : "/services/#product-design",
    },
    {
      label: t("Footer.services.2"),
      href: serviceRoute ? "#cloud-solutions" : "/services/#cloud-solutions",
    },
    { label: t("Footer.services.3"), href: "/blogs" },
  ];
  return (
    <footer className={cn("text-white block")}>
      <section
        className="py-8 md:py-16"
        style={{
          backgroundImage: "url('/images/footer/footer-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <div className="text-center md:space-y-2">
            <p className="md:text-3xl text-lg font-semibold md:leading-10">
              {t("Footer.first")}
            </p>
            <p className="md:leading-6 font-normal text-sm md:text-base">
              {t("Footer.second")}
            </p>
            <Link
              href={contactRoute ? "#contact" : "/contact-us/#contact"}
              className="text-[#E50914]  mt-4 md:px-10 px-6 md:py-4 py-3 md:text-lg leading-5 font-semibold inline-block bg-white rounded-3xl hover:bg-gray-100 transition duration-500 ease-in-out"
            >
              {t("Footer.button")}
            </Link>
          </div>
        </Container>
      </section>
      <section className="bg-primary py-8 md:py-16">
        <Container>
          <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1 space-y-3 ">
              <Image
                src="/images/logo.svg"
                alt="footer-logo"
                height={115}
                width={37}
                priority
                className="w-30 h-auto"
              />
              <p className="leading-6 font-normal">{t("Footer.text")}</p>
            </div>
            <section className="md:col-span-2 grid grid-cols-2 gap-2">
              <div className="space-y-3 ">
                <p>{t("Footer.Company")}</p>
                {data1.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link
                        href={item.href}
                        className="font-medium text-sm text-[#CCCCCC] leading-5 hover:underline"
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-3">
                <p>{t("Footer.Services")}</p>
                {data2.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link
                        href={item.href}
                        className="font-medium text-sm text-[#CCCCCC] leading-5 hover:underline"
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="md:col-span-1 ">
              <p>{t("Footer.connect")}</p>

              <div className="flex gap-5">
                {[
                  {
                    img: "/images/footer/linkedin.svg",
                    href: "https://www.linkedin.com/company/nexuxlabspvtltd/",
                    name: "linkedin",
                  },

                  {
                    img: "/images/footer/facebook.svg",
                    href: "https://www.facebook.com/share/1F3yHEEvAq/?mibextid=wwXIfr",
                    name: "facebook",
                  },
                  {
                    img: "/images/footer/instagram.svg",
                    href: "https://www.instagram.com/nexuxlabs?igsh=MWNvOTZyYXM4Mm5uOA==",
                    name: "instagram",
                  },
                ].map((item, index) => {
                  return (
                    <div key={index}>
                      <Link
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener"
                        className="inline-block mt-2"
                      >
                        <Image
                          src={item.img}
                          alt={item.name}
                          height={40}
                          width={40}
                          priority
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
          </section>
          <section className="text-center border-t border-white/10 mt-6 md:mt-10 pt-4 md:pt-6 leading-6 font-normal">
            &copy;{new Date().getFullYear()} Nexux Labs.{t("Footer.rights")}
          </section>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
