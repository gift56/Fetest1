interface QuestionTemplate {
  question: string;
  choices?: string[]; 
}

interface ProfileTemplate {
  mandatory: boolean;
  show: boolean;
}

interface PersonalInformationTemplate {
  internalUse: boolean;
  show: boolean;
}

interface ApplicationForm {
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

export default ApplicationForm;
