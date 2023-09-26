import { useFormik } from "formik";
import Card from "../card/Card";
import CustomizeInput from "../formInputs/CustomizeInput";
import validationSchema from "../../schema";
import FormValue from "../../hooks/type";
import { generalInitialValues } from "./generalInitialValues";

const ApplicationForm = () => {
  const initialValues = generalInitialValues;

  const onSubmit = async (payload: FormValue, actions: any) => {
    console.log(payload);
    await new Promise((res) => setTimeout(res, 1000));
    actions.resetForm();
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col p-5 md:p-10 gap-6"
    >
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
          <div className="flex items-center justify-between w-full gap-3 pb-3 border-b border-[#C4C4C4] focus:border-primary transition-all">
            <label
              htmlFor="phoneNumber"
              className="text-lg font-semibold text-black"
            >
              Phone{" "}
              <span className="text-sm font-normal">(without dial code)</span>
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="phoneNumber"
                  className="text-sm font-normal text-black cursor-pointer"
                >
                  Internal
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={false}
                    // onChange={handleChange}
                    name="phoneNumber"
                  />
                  <i className="bg-[#F4F4F4] border relative w-11 h-6 rounded-xl transition-all duration-200 before:content-[''] before:absolute before:top-[1px] before:left-[2.8px] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-newLongShadow before:transition-all before:duration-300 cursor-pointer"></i>
                </span>
                <span className="text-[#666] text-sm font-normal flex items-center justify-center select-none cursor-pointer">
                  Hide
                </span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-3 pb-3 border-b border-[#C4C4C4] focus:border-primary transition-all">
            <label
              htmlFor="nationality"
              className="text-lg font-semibold text-black"
            >
              Nationality
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="nationality"
                  id="nationality"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="nationality"
                  className="text-sm font-normal text-black cursor-pointer"
                >
                  Internal
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={false}
                    // onChange={handleChange}
                    name="nationality"
                  />
                  <i className="bg-[#F4F4F4] border relative w-11 h-6 rounded-xl transition-all duration-200 before:content-[''] before:absolute before:top-[1px] before:left-[2.8px] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-newLongShadow before:transition-all before:duration-300 cursor-pointer"></i>
                </span>
                <span className="text-[#666] text-sm font-normal flex items-center justify-center select-none cursor-pointer">
                  Hide
                </span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-3 pb-3 border-b border-[#C4C4C4] focus:border-primary transition-all">
            <label
              htmlFor="currentResidence"
              className="text-lg font-semibold text-black"
            >
              Current Residence
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="currentResidence"
                  id="currentResidence"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="currentResidence"
                  className="text-sm font-normal text-black cursor-pointer"
                >
                  Internal
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={false}
                    // onChange={handleChange}
                    name="currentResidence"
                  />
                  <i className="bg-[#F4F4F4] border relative w-11 h-6 rounded-xl transition-all duration-200 before:content-[''] before:absolute before:top-[1px] before:left-[2.8px] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-newLongShadow before:transition-all before:duration-300 cursor-pointer"></i>
                </span>
                <span className="text-[#666] text-sm font-normal flex items-center justify-center select-none cursor-pointer">
                  Hide
                </span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-3 pb-3 border-b border-[#C4C4C4] focus:border-primary transition-all">
            <label
              htmlFor="idNumber"
              className="text-lg font-semibold text-black"
            >
              ID Number
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="idNumber"
                  id="idNumber"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="idNumber"
                  className="text-sm font-normal text-black cursor-pointer"
                >
                  Internal
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={false}
                    // onChange={handleChange}
                    name="idNumber"
                  />
                  <i className="bg-[#F4F4F4] border relative w-11 h-6 rounded-xl transition-all duration-200 before:content-[''] before:absolute before:top-[1px] before:left-[2.8px] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-newLongShadow before:transition-all before:duration-300 cursor-pointer"></i>
                </span>
                <span className="text-[#666] text-sm font-normal flex items-center justify-center select-none cursor-pointer">
                  Hide
                </span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-3 pb-3 border-b border-[#C4C4C4] focus:border-primary transition-all">
            <label
              htmlFor="dateOfBirth"
              className="text-lg font-semibold text-black"
            >
              Date of Birth
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="dateOfBirth"
                  className="text-sm font-normal text-black cursor-pointer"
                >
                  Internal
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={false}
                    // onChange={handleChange}
                    name="dateOfBirth"
                  />
                  <i className="bg-[#F4F4F4] border relative w-11 h-6 rounded-xl transition-all duration-200 before:content-[''] before:absolute before:top-[1px] before:left-[2.8px] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-newLongShadow before:transition-all before:duration-300 cursor-pointer"></i>
                </span>
                <span className="text-[#666] text-sm font-normal flex items-center justify-center select-none cursor-pointer">
                  Hide
                </span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-3 pb-3 border-b border-[#C4C4C4] focus:border-primary transition-all">
            <label
              htmlFor="gender"
              className="text-lg font-semibold text-black"
            >
              Gender
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="gender"
                  id="gender"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="gender"
                  className="text-sm font-normal text-black cursor-pointer"
                >
                  Internal
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={false}
                    // onChange={handleChange}
                    name="gender"
                  />
                  <i className="bg-[#F4F4F4] border relative w-11 h-6 rounded-xl transition-all duration-200 before:content-[''] before:absolute before:top-[1px] before:left-[2.8px] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-newLongShadow before:transition-all before:duration-300 cursor-pointer"></i>
                </span>
                <span className="text-[#666] text-sm font-normal flex items-center justify-center select-none cursor-pointer">
                  Hide
                </span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer">
            <img src="/icon/plusIcon.png" alt="plusIcon" className="w-5 h-5" />
            <span className="text-sm font-semibold text-black">
              Add a question
            </span>
          </div>
        </div>
      </Card>
      <Card headline="Profile">
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <div className="flex items-center justify-between w-full gap-3 pb-3 border-b border-[#C4C4C4] focus:border-primary transition-all">
            <label
              htmlFor="education"
              className="text-lg font-semibold text-black"
            >
              Education
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="education"
                  id="education"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="education"
                  className="text-sm font-normal text-black cursor-pointer"
                >
                  Mandatory
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={false}
                    // onChange={handleChange}
                    name="education"
                  />
                  <i className="bg-[#F4F4F4] border relative w-11 h-6 rounded-xl transition-all duration-200 before:content-[''] before:absolute before:top-[1px] before:left-[2.8px] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-newLongShadow before:transition-all before:duration-300 cursor-pointer"></i>
                </span>
                <span className="text-[#666] text-sm font-normal flex items-center justify-center select-none cursor-pointer">
                  Hide
                </span>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between w-full gap-3 pb-3 border-b border-[#C4C4C4] focus:border-primary transition-all">
            <label
              htmlFor="experience"
              className="text-lg font-semibold text-black"
            >
              Experience
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="experience"
                  id="experience"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="experience"
                  className="text-sm font-normal text-black cursor-pointer"
                >
                  Mandatory
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={false}
                    // onChange={handleChange}
                    name="experience"
                  />
                  <i className="bg-[#F4F4F4] border relative w-11 h-6 rounded-xl transition-all duration-200 before:content-[''] before:absolute before:top-[1px] before:left-[2.8px] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-newLongShadow before:transition-all before:duration-300 cursor-pointer"></i>
                </span>
                <span className="text-[#666] text-sm font-normal flex items-center justify-center select-none cursor-pointer">
                  Hide
                </span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-3 pb-3 border-b border-[#C4C4C4] focus:border-primary transition-all">
            <label
              htmlFor="resume"
              className="text-lg font-semibold text-black"
            >
              Resume
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="resume"
                  id="resume"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="resume"
                  className="text-sm font-normal text-black cursor-pointer"
                >
                  Mandatory
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={false}
                    // onChange={handleChange}
                    name="resume"
                  />
                  <i className="bg-[#F4F4F4] border relative w-11 h-6 rounded-xl transition-all duration-200 before:content-[''] before:absolute before:top-[1px] before:left-[2.8px] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-newLongShadow before:transition-all before:duration-300 cursor-pointer"></i>
                </span>
                <span className="text-[#666] text-sm font-normal flex items-center justify-center select-none cursor-pointer">
                  Hide
                </span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer">
            <img src="/icon/plusIcon.png" alt="plusIcon" className="w-5 h-5" />
            <span className="text-sm font-semibold text-black">
              Add a question
            </span>
          </div>
        </div>
      </Card>
      <Card headline="Additional questions">
        <div className="flex flex-col items-start justify-start w-full gap-3"></div>
      </Card>
    </form>
  );
};

export default ApplicationForm;
