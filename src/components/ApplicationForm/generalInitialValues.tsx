import FormValue from "../../hooks/type";

export const generalInitialValues: FormValue = {
  coverImage: "",
  personalInformation: {
    firstName: {
      internalUse: true,
      show: true,
    },
    lastName: {
      internalUse: true,
      show: true,
    },
    emailId: {
      internalUse: true,
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
