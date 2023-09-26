import { ReactNode } from "react";

interface CardProp {
  headline: string;
  content: ReactNode;
}

const Card = ({ headline, content }: CardProp) => {
  return <div className="w-full lg:w-[595px] h-fit shadow-cardShad rounded-[20px]">Card</div>;
};

export default Card;
