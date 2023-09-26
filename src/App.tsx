import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import { tabLinks } from "./utils/constant";

const App = () => {
  const [tab, setTab] = useState("Application Form");

  return (
    <MainLayout>
      <div className="w-full flex flex-col items-start justify-start h-screen  py-20 overflow-y-auto overflow-x-hidden">
        <ul className="w-full h-[129px] shadow-tabShad flex items-center justify-start">
          {tabLinks.map((item) => (
            <li
              key={item}
              onClick={() => setTab(item)}
              className={`w-full h-full flex items-center justify-center relative transition-all duration-300 font-Inter text-lg font-medium cursor-pointer first:before:hidden before:content-[''] before:absolute before:w-[2px] before:h-[50%] before:bg-[#C4C4C4] before:right-0 before:transition-all before:duration-300 ${
                tab === item
                  ? "bg-tabColor text-white before:bg-tabColor before:w-10 before:h-6 before:rotate-[45deg] before:translate-x-3"
                  : ""
              } `}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
};

export default App;
