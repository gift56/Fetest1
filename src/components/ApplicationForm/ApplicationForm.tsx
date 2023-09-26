import { useState } from "react";
import Card from "../card/Card";

const ApplicationForm = () => {
  return (
    <form className="w-full flex flex-col p-5 md:p-10 gap-6">
      <Card headline="Upload cover image">
        <label className="w-full border border-black rounded-[5px] flex flex-col gap-2 cursor-pointer hover:bg-basegray/10 transition-all duration-300 items-center justify-center px-3 border-dashed shadow-uploadShad h-[200px] my-2">
          <img
            src="/icon/uploadIcon.png"
            alt="uploadIcon"
            className="w-8 h-8"
          />
          <h3 className="text-sm font-semibold text-black">
            Upload cover image
          </h3>
          <p className="text-sm font-medium text-basegray">16:9 ratio is recommended. Max image size 1mb</p>
        </label>
      </Card>
      <Card headline="Personal Information">
        <div className="flex flex-col items-start justify-start w-full gap-3">

        </div>
      </Card>
    </form>
  );
};

export default ApplicationForm;
