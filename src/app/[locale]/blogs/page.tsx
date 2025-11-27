import BlogMainPage from "@/src/components/Blogs/BlogMainPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog | Nexux Labs",
  description:
    "Read the latest insights, tips, and updates on web development, digital solutions, and innovative technologies from the experts at Nexux Labs.",
  alternates: {
    canonical: "https://www.nexuxlabs.com/blog",
  },
  openGraph: {
    title: "Blog | Nexux Labs",
    description:
      "Read the latest insights, tips, and updates on web development, digital solutions, and innovative technologies from the experts at Nexux Labs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Nexux Labs",
    description:
      "Read the latest insights, tips, and updates on web development, digital solutions, and innovative technologies from the experts at Nexux Labs.",
  },
};

const page = () => {
  return (
  <BlogMainPage />
  );
};

export default page;
