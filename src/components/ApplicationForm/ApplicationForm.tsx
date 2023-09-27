import { useState, useEffect } from "react";
import { useFormik } from "formik";
import Card from "../card/Card";
import CustomizeInput from "../formInputs/CustomizeInput";
import validationSchema from "../../schema";
import FormValue from "../../hooks/type";
import { generalInitialValues } from "./generalInitialValues";
import { emptyQuestion, questionType } from "../../utils/constant";
import CustomizeSelect from "../formInputs/CustomizeSelect";
import CustomizeButton from "../CustomizeButton";
import { fetchDataFromServer, updateServerData } from "../../utils/fetch";

const ApplicationForm = () => {
  const [formData, setFormData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetchDataFromServer();
        setFormData(res?.data?.data?.attributes);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const onSubmit = async (payload: FormValue, actions: any) => {
    try {
      const res = await updateServerData(payload);
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error);
    }
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
    isSubmitting,
    touched,
  } = useFormik({
    initialValues: formData || generalInitialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit,
  });

  function handleImageChange(event: any) {
    const file = event.currentTarget.files[0];
    if (file && !file.type.startsWith("image/")) {
      alert("Please select an image file");
      setFieldValue("school_image", null);
      return;
    }
    setFieldValue("coverImage", file.name);
  }

  const addProfileQuestion = () => {
    setFieldValue("profile.profileQuestions", [
      ...values.profile.profileQuestions,
      emptyQuestion,
    ]);
  };
  const removeProfileQuestion = (indexToRemove: number) => {
    const updatedQuestions = values.profile.profileQuestions.filter(
      (_, index) => index !== indexToRemove
    );
    setFieldValue("profile.profileQuestions", updatedQuestions);
  };

  const addCustomisedQuestion = (item: any) => {
    setFieldValue("customisedQuestions", [...values.customisedQuestions, item]);
  };

  if (loading) return <p className="p-8">Loading...</p>;

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
              className={`w-full border-2 border-black rounded-[5px] flex flex-col gap-2 cursor-pointer hover:bg-basegray/10 transition-all duration-300 items-center justify-center px-3 border-dashed shadow-uploadShad h-[200px] my-2 ${
                errors.coverImage && touched.coverImage ? "!border-red-500" : ""
              }`}
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
          ) : typeof values.coverImage === "string" ? (
            // Handle the case when values.coverImage is a string (URL)
            <div className="w-full rounded-[5px] flex flex-col gap-2 cursor-pointer transition-all duration-300 items-start justify-between shadow-uploadShad overflow-hidden h-[350px] pb-4">
              <img
                src={values.coverImage}
                alt="Cover Image"
                className="w-full h-[300px] object-cover"
              />
              <div className="flex items-center justify-center gap-3 text-sm font-semibold text-danger cursor-pointer px-4">
                <img
                  src="/icon/closeIcon.png"
                  alt="closeIcon"
                  className="w-6 h-6"
                />
                <div className="flex items-center gap-2">
                  <span onClick={() => setFieldValue("coverImage", "")}>
                    Delete{" "}
                  </span>
                  &
                  <label
                    htmlFor="coverImage"
                    className="text-success cursor-pointer"
                  >
                    re-upload
                  </label>
                </div>
                <input
                  type="file"
                  name="coverImage"
                  onChange={handleImageChange}
                  onBlur={handleBlur}
                  accept="image/*"
                  id="coverImage"
                  className="hidden"
                />
              </div>
            </div>
          ) : (
            // Handle the case when values.coverImage is a Blob
            <div className="w-full rounded-[5px] flex flex-col gap-2 cursor-pointer transition-all duration-300 items-start justify-between shadow-uploadShad overflow-hidden h-[350px] pb-4">
              <img
                src={URL.createObjectURL(values.coverImage)}
                alt="uploaded image"
                className="w-full h-[300px] object-cover"
              />
              <div className="flex items-center justify-center gap-3 text-sm font-semibold text-danger cursor-pointer px-4">
                <img
                  src="/icon/closeIcon.png"
                  alt="closeIcon"
                  className="w-6 h-6"
                />
                <div className="flex items-center gap-2">
                  <span onClick={() => setFieldValue("coverImage", "")}>
                    Delete{" "}
                  </span>
                  &
                  <label
                    htmlFor="coverImage"
                    className="text-success cursor-pointer"
                  >
                    re-upload
                  </label>
                </div>
                <input
                  type="file"
                  name="coverImage"
                  onChange={handleImageChange}
                  onBlur={handleBlur}
                  accept="image/*"
                  id="coverImage"
                  className="hidden"
                />
              </div>
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
              className="text-lg font-semibold text-black select-none"
            >
              Education
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="profile.education.mandatory"
                  id="education"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="education"
                  className="text-sm font-normal text-black select-none cursor-pointer"
                >
                  Mandatory
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={values.profile.education.show}
                    onChange={handleChange}
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
              className="text-lg font-semibold text-black select-none"
            >
              Experience
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="profile.experience.mandatory"
                  id="experience"
                  className="accent-success rounded cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="experience"
                  className="text-sm font-normal text-black select-none cursor-pointer"
                >
                  Mandatory
                </label>
              </div>
              <label className="flex items-center gap-3 w-fit relative">
                <span className="flex items-center justify-center select-none action">
                  <input
                    type="checkbox"
                    className="appearance-none"
                    defaultChecked={values.profile.experience.show}
                    onChange={handleChange}
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
              className="text-lg font-semibold text-black select-none"
            >
              Resume
            </label>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="profile.resume.mandatory"
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
                    defaultChecked={values.profile.resume.show}
                    onChange={handleChange}
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
          <div
            onClick={addProfileQuestion}
            className="flex items-center justify-start gap-3 cursor-pointer"
          >
            <img src="/icon/plusIcon.png" alt="plusIcon" className="w-5 h-5" />
            <span className="text-sm font-semibold text-black">
              Add a question
            </span>
          </div>
        </div>
      </Card>
      <div
        className={`${
          values.profile.profileQuestions.length === 0
            ? "scale-0 opacity-0 absolute"
            : "scale-1 opacity-100 relative"
        } transition-all duration-300`}
      >
        <Card headline="Question">
          <div className="w-full">
            {values.profile.profileQuestions.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-start gap-5"
              >
                <CustomizeSelect
                  showLabel={false}
                  label="Type"
                  htmlFor="type"
                  labelClassName="text-sm font-medium text-black"
                  value={item.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name={`profile.profileQuestions[${index}].type`}
                  className="bg-white appearance-none border border-black h-[44px] w-full rounded px-4 outline-none text-sm text-basegray placeholder:text-basegray focus:border-primary transition-all duration-300"
                >
                  {questionType.map((item) => (
                    <option id="type" value={item.value} key={item.text}>
                      {item.text}
                    </option>
                  ))}
                </CustomizeSelect>
                <CustomizeInput
                  showLabel={false}
                  label="Question"
                  htmlFor="question"
                  labelClassName="text-sm font-medium text-black"
                  type="text"
                  name={`profile.profileQuestions[${index}].question`}
                  value={item.question}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="question"
                  placeholder="Type here"
                  className="bg-white border border-black h-[44px] w-full rounded px-4 outline-none text-sm text-basegray placeholder:text-basegray focus:border-primary transition-all duration-300"
                />
                {item.type === "Dropdown" || item.type === "MultipleChoice" ? (
                  <div className="w-full flex flex-col items-start justify-start gap-3">
                    <label
                      htmlFor="choice"
                      className="text-sm font-medium text-black"
                    >
                      Choice
                    </label>

                    {item.choices?.map((choice, choiceIndex) => (
                      <div
                        key={choiceIndex}
                        className="flex items-center justify-between w-full gap-3"
                      >
                        <img
                          src="/icon/listIcon.png"
                          alt="listIcon"
                          className="w-6 h-6"
                        />
                        <CustomizeInput
                          showLabel={true}
                          type="text"
                          name={`profile.profileQuestions[${index}].choices[${choiceIndex}]`}
                          value={choice}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Type here"
                          className="bg-white border border-black h-[44px] w-full rounded px-4 outline-none text-sm text-basegray placeholder:text-basegray focus:border-primary transition-all duration-300"
                        />
                        <img
                          src="/icon/plusIcon.png"
                          alt="plusIcon"
                          className="w-3 h-3 cursor-pointer"
                          onClick={() => {
                            const currentChoices = item.choices || [];
                            setFieldValue(
                              `profile.profileQuestions[${index}].choices`,
                              [...currentChoices, ""]
                            );
                          }}
                        />
                      </div>
                    ))}

                    <div className="flex items-center justify-start gap-2">
                      <input
                        type="checkbox"
                        name={`${
                          item.type === "Dropdown"
                            ? `profile.profileQuestions[${index}].other`
                            : `profile.profileQuestions[${index}].disqualify`
                        }`}
                        id={`${
                          item.type === "Dropdown" ? "other" : "disqualify"
                        }`}
                        onChange={handleChange}
                        className="accent-success rounded cursor-pointer w-4 h-4"
                      />
                      <label
                        htmlFor={`${
                          item.type === "Dropdown" ? "other" : "disqualify"
                        }`}
                        className="text-sm font-normal text-black select-none cursor-pointer"
                      >
                        {item.type === "Dropdown"
                          ? "Enable “Other” option"
                          : "Disqualify candidate if the answer is no"}
                      </label>
                    </div>
                  </div>
                ) : null}

                <div className="w-full flex items-center justify-between gap-4">
                  <span
                    onClick={() => removeProfileQuestion(index)}
                    className="text-sm font-semibold text-danger cursor-pointer flex items-center justify-center gap-3"
                  >
                    <img
                      src="/icon/closeIcon.png"
                      alt="closeIcon"
                      className="w-6 h-6"
                    />
                    <span>Delete question</span>
                  </span>
                  <CustomizeButton
                    type="button"
                    text="Save"
                    onClick={() => {
                      const itemToAdd = values.profile.profileQuestions[index];
                      addCustomisedQuestion(itemToAdd);
                      if (itemToAdd) {
                        removeProfileQuestion(index);
                      }
                    }}
                    className="flex items-center justify-center bg-success rounded w-fit px-4 py-2 text-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      {/* 
      <div
        className={`${
          values.customisedQuestions.length === 0
            ? "scale-0 opacity-0 absolute"
            : "scale-1 opacity-100 relative"
        } transition-all duration-300`}
      >
        <Card headline="Additional questions">
          <div className="w-full">
            {values.customisedQuestions.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-start gap-5"
              >
                <CustomizeInput
                  showLabel={false}
                  label="Question"
                  htmlFor="question"
                  labelClassName="text-sm font-medium text-black"
                  type="text"
                  name={`customisedQuestions[${index}].question`}
                  value={item.question}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="question"
                  placeholder="Type here"
                  className="bg-white border border-black h-[44px] w-full rounded px-4 outline-none text-sm text-basegray placeholder:text-basegray focus:border-primary transition-all duration-300"
                />

                <div className="w-full flex flex-col items-start justify-start gap-3">
                  <label
                    htmlFor="choice"
                    className="text-sm font-medium text-black"
                  >
                    Choice
                  </label>

                  {item.choices?.map((choice, choiceIndex) => (
                    <div
                      key={choiceIndex}
                      className="flex items-center justify-between w-full gap-3"
                    >
                      <img
                        src="/icon/listIcon.png"
                        alt="listIcon"
                        className="w-6 h-6"
                      />
                      <CustomizeInput
                        showLabel={true}
                        type="text"
                        name={`customisedQuestions[${index}].choices[${choiceIndex}]`}
                        value={choice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Type here"
                        className="bg-white border border-black h-[44px] w-full rounded px-4 outline-none text-sm text-basegray placeholder:text-basegray focus:border-primary transition-all duration-300"
                      />
                      <img
                        src="/icon/plusIcon.png"
                        alt="plusIcon"
                        className="w-3 h-3 cursor-pointer"
                        onClick={() => {
                          const currentChoices = item.choices || [];
                          setFieldValue(
                            `customisedQuestions[${index}].choices`,
                            [...currentChoices, ""]
                          );
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="w-full flex items-center justify-between gap-4">
                  <span
                    onClick={() => removeCustomisedQuestion(index)}
                    className="text-sm font-semibold text-danger cursor-pointer flex items-center justify-center gap-3"
                  >
                    <img
                      src="/icon/closeIcon.png"
                      alt="closeIcon"
                      className="w-6 h-6"
                    />
                    <span>Delete question</span>
                  </span>
                  <CustomizeButton
                    type="button"
                    text="Save"
                    onClick={() => {
                      removeCustomisedQuestion(index);
                    }}
                    className="flex items-center justify-center bg-success rounded w-fit px-4 py-2 text-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div> */}
      <CustomizeButton
        type="submit"
        text="Submit"
        disabled={isSubmitting}
        className="!w-fit bg-success text-white !px-10 !rounded-md disabled:bg-primary disabled:cursor-not-allowed"
      />
    </form>
  );
};

export default ApplicationForm;
