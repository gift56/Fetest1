import { useState } from "react";
import MainLayout from "./layout/MainLayout";

const App = () => {
  const [tab, setTab] = useState("Application Form");

  return (
    <MainLayout>
      <div className="w-full flex flex-col items-start justify-start h-screen  py-20 overflow-y-auto overflow-x-hidden">
        <div className="w-full h-[129px] shadow-tabShad flex items-center justify-start">
          
        </div>
      </div>
    </MainLayout>
  );
};

export default App;
