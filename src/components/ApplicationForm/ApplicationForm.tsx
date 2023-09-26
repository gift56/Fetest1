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

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  function handleImageChange(event: any) {
    const file = event.currentTarget.files[0];
    if (file && !file.type.startsWith("image/")) {
      alert("Please select an image file");
      setFieldValue("school_image", null);
      return;
    }
    setFieldValue("coverImage", file);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col p-5 md:p-10 gap-6"
    >
      <Card headline="Upload cover image">
        <>
          {!values.coverImage ? (
            <label
              htmlFor="coverImage"
              className="w-full border border-black rounded-[5px] flex flex-col gap-2 cursor-pointer hover:bg-basegray/10 transition-all duration-300 items-center justify-center px-3 border-dashed shadow-uploadShad h-[200px] my-2"
            >
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
              <input
                type="file"
                name="coverImage"
                onChange={handleImageChange}
                onBlur={handleBlur}
                accept="image/*"
                id="coverImage"
                className="hidden"
              />
            </label>
          ) : (
            <div className="w-full border border-black rounded-[5px] flex flex-col gap-2 cursor-pointer transition-all duration-300 items-center justify-center px-3 border-dashed shadow-uploadShad overflow-hidden h-[400px] my-2">
              <img
                src={URL.createObjectURL(values?.coverImage)}
                alt={values.coverImage?.name}
                className="w-full h-[300px] object-cover"
              />
              <label
                htmlFor="coverImage"
                className="flex items-center justify-center gap-5 text-sm font-semibold text-danger cursor-pointer"
              >
                <img
                  src="/icon/closeIcon.png"
                  alt="closeIcon"
                  className="w-6 h-6"
                />
                <span>Delete & re-upload</span>
                <input
                  type="file"
                  name="coverImage"
                  onChange={handleImageChange}
                  onBlur={handleBlur}
                  accept="image/*"
                  id="coverImage"
                  className="hidden"
                />
              </label>
            </div>
          )}
        </>
      </Card>
      <Card headline="Personal Information">
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <CustomizeInput
            htmlFor="firstName"
            label="First Name"
            labelClassName="text-lg font-semibold text-black"
            showLabel={false}
            id="firstName"
            name="personalInformation.firstName"
            value={values.personalInformation.firstName.show ? "" : ""}
            onBlur={handleBlur}
            onChange={handleChange}
            disabled={values.personalInformation.firstName.show}
            className={`w-full border-b border-[#C4C4C4] px-2 focus:border-primary transition-all disabled:bg-transparent disabled:cursor-not-allowed ${
              errors.personalInformation?.firstName ? "!border-red-600" : ""
            }`}
          />
          <CustomizeInput
            htmlFor="lastName"
            label="Last Name"
            labelClassName="text-lg font-semibold text-black"
            showLabel={false}
            id="lastName"
            name="personalInformation.lastName"
            value={values.personalInformation.lastName.show ? "" : ""}
            onBlur={handleBlur}
            onChange={handleChange}
            disabled={values.personalInformation.lastName.show}
            className={`w-full border-b border-[#C4C4C4] px-2 focus:border-primary transition-all disabled:bg-transparent disabled:cursor-not-allowed ${
              errors.personalInformation?.lastName ? "!border-red-600" : ""
            }`}
          />
          <CustomizeInput
            htmlFor="emailId"
            label="Email"
            labelClassName="text-lg font-semibold text-black"
            showLabel={false}
            id="emailId"
            name="personalInformation.emailId"
            value={values.personalInformation.emailId.show ? "" : ""}
            onBlur={handleBlur}
            onChange={handleChange}
            disabled={values.personalInformation.emailId.show}
            className={`w-full border-b border-[#C4C4C4] px-2 focus:border-primary transition-all disabled:bg-transparent disabled:cursor-not-allowed ${
              errors.personalInformation?.emailId ? "!border-red-600" : ""
            }`}
          />
          <div className="flex items-center justify-between w-full gap-3 pb-3 border-b border-[#C4C4C4] focus:border-primary transition-all">
            <label
              htmlFor="phoneNumber"
              className="text-lg font-semibold text-black select-none"
            >
              Phone{" "}
              <span className="text-sm font-normal">(without dial code)</span>
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="personalInformation.phoneNumber.internalUse"
                  onChange={handleChange}
                  id="phoneNumber"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="phoneNumber"
                  className="text-sm font-normal text-black cursor-pointer select-none"
                >
                  Internal
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={values.personalInformation.phoneNumber.show}
                    onChange={handleChange}
                    name="personalInformation.phoneNumber.show"
                    id="phoneNumber"
                  />
                  <i className="bg-[#F4F4F4] border relative w-11 h-6 rounded-xl transition-all duration-200 before:content-[''] before:absolute before:top-[1px] before:left-[2.8px] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-newLongShadow before:transition-all before:duration-300 cursor-pointer"></i>
                </span>
                <span className="text-[#666] text-sm font-normal flex items-center justify-center cursor-pointer select-none">
                  Hide
                </span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-3 pb-3 border-b border-[#C4C4C4] focus:border-primary transition-all">
            <label
              htmlFor="nationality"
              className="text-lg font-semibold text-black select-none"
            >
              Nationality
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="personalInformation.nationality.internalUse"
                  id="nationality"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="nationality"
                  className="text-sm font-normal text-black cursor-pointer select-none"
                >
                  Internal
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={values.personalInformation.nationality.show}
                    onChange={handleChange}
                    name="personalInformation.nationality.show"
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
              className="text-lg font-semibold text-black select-none"
            >
              Current Residence
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="personalInformation.currentResidence.internalUse"
                  id="currentResidence"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="currentResidence"
                  className="text-sm font-normal text-black cursor-pointer select-none"
                >
                  Internal
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={
                      values.personalInformation.currentResidence.show
                    }
                    onChange={handleChange}
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
              className="text-lg font-semibold text-black select-none"
            >
              ID Number
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="personalInformation.idNumber.internalUse"
                  id="idNumber"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="idNumber"
                  className="text-sm font-normal text-black select-none cursor-pointer"
                >
                  Internal
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={values.personalInformation.idNumber.show}
                    onChange={handleChange}
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
              className="text-lg font-semibold text-black select-none"
            >
              Date of Birth
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="personalInformation.dateOfBirth.internalUse"
                  id="dateOfBirth"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="dateOfBirth"
                  className="text-sm font-normal text-black select-none cursor-pointer"
                >
                  Internal
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={values.personalInformation.dateOfBirth.show}
                    onChange={handleChange}
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
              className="text-lg font-semibold text-black select-none"
            >
              Gender
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="personalInformation.gender.internalUse"
                  id="gender"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="gender"
                  className="text-sm font-normal text-black select-none cursor-pointer"
                >
                  Internal
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={values.personalInformation.gender.show}
                    onChange={handleChange}
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
