import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import { tabLinks } from "./utils/constant";

const App = () => {
  const [tab, setTab] = useState("Application Form");

  return (
    <MainLayout>
      <div className="w-full flex flex-col items-start justify-start h-screen  py-20 overflow-y-auto overflow-x-hidden">
        <div className="w-full h-[129px] shadow-tabShad flex items-center justify-start">
          {tabLinks.map((item)=>(
            <div key={item}></div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default App;
