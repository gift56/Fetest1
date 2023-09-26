import { useState } from "react";
import MainLayout from "./layout/MainLayout";

const App = () => {
  const [tab, setTab] = useState("Application Form");

  return (
    <MainLayout>
      <div className="w-full flex flex-col items-start justify-start">
        <div className="w-full"></div>
      </div>
    </MainLayout>
  );
};

export default App;
