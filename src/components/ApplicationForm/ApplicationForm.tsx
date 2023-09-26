import { useState } from "react";
import Card from "../card/Card";

const ApplicationForm = () => {
  return (
    <form className="w-full flex flex-col p-5 md:p-10 gap-6">
      <Card headline="Upload cover image">
        <label className="w-full border border-black rounded-[5px] flex flex-col items-center justify-center px-3 border-dashed shadow-uploadShad h-[200px]">
          <img
            src=".icon/uploadIcon.png"
            alt="uploadIcon"
            className="w-8 h-8"
          />
        </label>
      </Card>
    </form>
  );
};

export default ApplicationForm;
