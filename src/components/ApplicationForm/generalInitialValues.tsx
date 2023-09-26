import { FormikValues } from "formik";

const generalInitialValues = (): FormikValues => {
  const initialValues: FormikValues = {
    coverImage: "",
    personalInformation: {
      firstName: {
        internalUse: false,
        show: true,
      },
      lastName: {
        internalUse: false,
        show: true,
      },
      emailId: {
        internalUse: false,
        show: true,
      },
      phoneNumber: {
        internalUse: false,
        show: true,
      },
      nationality: {
        internalUse: false,
        show: true,
      },
      currentResidence: {
        internalUse: false,
        show: true,
      },
      idNumber: {
        internalUse: false,
        show: true,
      },
      dateOfBirth: {
        internalUse: false,
        show: true,
      },
      gender: {
        internalUse: false,
        show: true,
      },
      personalQuestions: [],
    },
    profile: {
      education: {
        mandatory: false,
        show: true,
      },
      experience: {
        mandatory: false,
        show: true,
      },
      resume: {
        mandatory: false,
        show: true,
      },
      profileQuestions: [],
    },
    customisedQuestions: [],
  };

  return initialValues;
};

export default generalInitialValues;
