import { ReactNode } from "react";

interface CardProp {
  headline: string;
  content: ReactNode;
}

const Card = ({ headline, content }: CardProp) => {
  return (
    <div className="w-full lg:w-[595px] h-fit shadow-cardShad rounded-[20px] flex flex-col items-start justify-start">
      <h2 className="text-base md:text-lg"></h2>
    </div>
  );
};

export default Card;
