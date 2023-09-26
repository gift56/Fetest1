import * as Yup from "yup";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  coverImage: Yup.string().required("Cover Image is required"),
  personalInformation: Yup.object().shape({
    firstName: Yup.object().shape({
      internalUse: Yup.boolean(),
      show: Yup.boolean(),
    }),
    lastName: Yup.object().shape({
      internalUse: Yup.boolean(),
      show: Yup.boolean(),
    }),
    emailId: Yup.object().shape({
      internalUse: Yup.boolean(),
      show: Yup.boolean(),
    }),
    phoneNumber: Yup.object().shape({
      internalUse: Yup.boolean(),
      show: Yup.boolean(),
    }),
    nationality: Yup.object().shape({
      internalUse: Yup.boolean(),
      show: Yup.boolean(),
    }),
    currentResidence: Yup.object().shape({
      internalUse: Yup.boolean(),
      show: Yup.boolean(),
    }),
    idNumber: Yup.object().shape({
      internalUse: Yup.boolean(),
      show: Yup.boolean(),
    }),
    dateOfBirth: Yup.object().shape({
      internalUse: Yup.boolean(),
      show: Yup.boolean(),
    }),
    gender: Yup.object().shape({
      internalUse: Yup.boolean(),
      show: Yup.boolean(),
    }),
    personalQuestions: Yup.array().of(
      Yup.object().shape({
        id: Yup.string(),
        type: Yup.string().oneOf([
          "Paragraph",
          "ShortAnswer",
          "YesNo",
          "Dropdown",
          "MultipleChoice",
          "Date",
          "Number",
          "FileUpload",
        ]),
        question: Yup.string().required("required"),
        choices: Yup.array(),
        maxChoice: Yup.number(),
        disqualify: Yup.boolean(),
        other: Yup.boolean(),
      })
    ),
  }),
  profile: Yup.object().shape({
    education: Yup.object().shape({
      mandatory: Yup.boolean(),
      show: Yup.boolean(),
    }),
    experience: Yup.object().shape({
      mandatory: Yup.boolean(),
      show: Yup.boolean(),
    }),
    resume: Yup.object().shape({
      mandatory: Yup.boolean(),
      show: Yup.boolean(),
    }),
    profileQuestions: Yup.array().of(
      Yup.object().shape({
        id: Yup.string(),
        type: Yup.string().oneOf([
          "Paragraph",
          "ShortAnswer",
          "YesNo",
          "Dropdown",
          "MultipleChoice",
          "Date",
          "Number",
          "FileUpload",
        ]),
        question: Yup.string().required("required"),
        choices: Yup.array(),
        maxChoice: Yup.number(),
        disqualify: Yup.boolean(),
        other: Yup.boolean(),
      })
    ),
  }),
  customisedQuestions: Yup.array().of(
    Yup.object().shape({
      id: Yup.string(),
      type: Yup.string().oneOf([
        "Paragraph",
        "ShortAnswer",
        "YesNo",
        "Dropdown",
        "MultipleChoice",
        "Date",
        "Number",
        "FileUpload",
      ]),
      question: Yup.string().required("required"),
      choices: Yup.array(),
      maxChoice: Yup.number(),
      disqualify: Yup.boolean(),
      other: Yup.boolean(),
    })
  ),
});

export default validationSchema;
