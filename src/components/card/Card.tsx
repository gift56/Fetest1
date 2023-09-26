import { ReactNode } from "react";

interface CardProp {
  headline: string;
  children: ReactNode;
}

const Card = ({ headline, children }: CardProp) => {
  return (
    <div className="w-full lg:w-[595px] h-fit shadow-cardShad rounded-[20px] flex flex-col items-start justify-start overflow-hidden">
      <div className="bg-primary py-3 px-4 w-full">
        <h2 className="text-base md:text-lg font-semibold">{headline}</h2>
      </div>
      <div className="w-full bg-white p-3">{children}</div>
    </div>
  );
};

export default Card;
