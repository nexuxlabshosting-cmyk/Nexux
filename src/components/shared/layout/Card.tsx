import { Tv2, Briefcase, CircleDollarSign, Clock } from "lucide-react";

export interface CardProps {
  icon: string;
  title: string;
  paragraph: string;
}

export const Card = ({ icon, title, paragraph }: CardProps) => {
  const findIcon = (icon: string) => {
    switch (icon) {
      case "TV":
        return <Tv2 size={24} />;
      case "dollar":
        return <CircleDollarSign size={24} />;
      case "time":
        return <Clock size={24} />;
      case "briefcase":
        return <Briefcase size={24} />;
    }
  };
  return (
    <div className="text-start border border-[#FCE6E8] rounded-2xl p-6  space-y-2">
      <span className="p-2 bg-[#E50914] text-white rounded-full flex items-center justify-center h-10 w-10">
        {findIcon(icon)}
      </span>
      <h3 className="font-semibold text-lg leading-7">{title}</h3>
      <p className="font-normal leading-6 text-sm text-[#595959]">
        {paragraph}
      </p>
    </div>
  );
};
