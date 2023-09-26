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
              className={`w-full h-full flex items-center justify-center relative transition-all duration-300 font-Inter text-lg font-medium cursor-pointer`}
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
