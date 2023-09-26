import { useState } from "react";
import Card from "../card/Card";
import CustomizeInput from "../formInputs/CustomizeInput";

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
          <p className="text-sm font-medium text-basegray">
            16:9 ratio is recommended. Max image size 1mb
          </p>
        </label>
      </Card>
      <Card headline="Personal Information">
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <CustomizeInput
            htmlFor="firstName"
            label="First Name"
            labelClassName="text-lg font-semibold text-black"
            showLabel={false}
            id="firstName"
            name="firstName"
            errorClass="hidden"
            value=""
            onBlur={() => {}}
            onChange={() => {}}
            className="w-full border-b border-[#C4C4C4] px-2 focus:border-primary transition-all"
          />
          <CustomizeInput
            htmlFor="lastName"
            label="Last Name"
            labelClassName="text-lg font-semibold text-black"
            showLabel={false}
            id="lastName"
            name="lastName"
            errorClass="hidden"
            value=""
            onBlur={() => {}}
            onChange={() => {}}
            className="w-full border-b border-[#C4C4C4] px-2 focus:border-primary transition-all"
          />
          <CustomizeInput
            htmlFor="emailId"
            label="Email"
            labelClassName="text-lg font-semibold text-black"
            showLabel={false}
            id="emailId"
            name="emailId"
            errorClass="hidden"
            value=""
            onBlur={() => {}}
            onChange={() => {}}
            className="w-full border-b border-[#C4C4C4] px-2 focus:border-primary transition-all"
          />
          <div className="flex items-center justify-between w-full gap-3 pb-3 border-b border-[#C4C4C4] px-2 focus:border-primary transition-all">
            <label
              htmlFor="phoneNumber"
              className="text-lg font-semibold text-black"
            >
              Phone{" "}
              <span className="text-sm font-normal">(without dial code)</span>
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input type="checkbox" name="internal" id="internal" className="accent-success rounded" />
                <label htmlFor="internal" className="text-sm font-normal text-black">Internal</label>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </form>
  );
};

export default ApplicationForm;
