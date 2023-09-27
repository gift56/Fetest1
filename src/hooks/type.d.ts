interface QuestionTemplate {
  id: string;
  type:
    | "Paragraph"
    | "ShortAnswer"
    | "YesNo"
    | "Dropdown"
    | "MultipleChoice"
    | "Date"
    | "Number"
    | "FileUpload";
  question: string;
  choices?: string[]; // If 'type' is 'Dropdown' or 'MultipleChoice'
  maxChoice?: number; // If 'type' is 'MultipleChoice'
  disqualify: boolean;
  other: boolean;
}

interface ProfileTemplate {
  mandatory: boolean;
  show: boolean;
}

interface PersonalInformationTemplate {
  internalUse: boolean;
  show: boolean;
}

interface FormValue {
  coverImage: string;
  personalInformation: {
    firstName: PersonalInformationTemplate;
    lastName: PersonalInformationTemplate;
    emailId: PersonalInformationTemplate;
    phoneNumber: PersonalInformationTemplate;
    nationality: PersonalInformationTemplate;
    currentResidence: PersonalInformationTemplate;
    idNumber: PersonalInformationTemplate;
    dateOfBirth: PersonalInformationTemplate;
    gender: PersonalInformationTemplate;
    personalQuestions: QuestionTemplate[];
  };
  profile: {
    education: ProfileTemplate;
    experience: ProfileTemplate;
    resume: ProfileTemplate;
    profileQuestions: QuestionTemplate[];
  };
  customisedQuestions: QuestionTemplate[];
}

export default FormValue;
