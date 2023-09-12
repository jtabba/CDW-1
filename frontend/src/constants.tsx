export const QUESTIONNAIRE_FIELDS = [
  {
    inputType: 'textArea',
    label: 'Tell us a little about yourself!',
    name: 'bio',
  },
  {
    inputType: 'other',
    label: 'How many years of experience do you have as a software engineer?',
    name: 'experience',
  },
  {
    inputType: 'other',
    label: 'What is your current job title?',
    name: 'jobTitle',
  },
  {
    inputType: 'other',
    label: 'What are your interests?',
    name: 'interests',
  },
];

export const MENTEE_FIELDS = [
  ...QUESTIONNAIRE_FIELDS,
  {
    inputType: 'textArea',
    label: 'What are you looking to learn?',
    name: 'learningGoals',
  },
];

export const MENTOR_FIELDS = [
  ...QUESTIONNAIRE_FIELDS,
  {
    inputType: 'textArea',
    label: 'What are your areas of expertise?',
    name: 'expertise',
  },
  {
    inputType: 'textArea',
    label: 'What is your hourly rate? Leave as 0 for free mentoring.',
    name: 'hourlyRate',
  },
];

export const LISTS = [
  {
    name: "experience",
    values: "0-2 years",
  },
  {
    name: "experience",
    values: "2-4 years",
  },
  {
    name: "experience",
    values: "4-6 years",
  },
  {
    name: "experience",
    values: "6-8 years",
  },
  {
    name: "experience",
    values: "8-10 years",
  },
  {
    name: "experience",
    values: "10+ years",
  },
  {
    name: "jobTitle",
    values: "Unemployed/ Non-Tech",
  },
  {
    name: "jobTitle",
    values: "Freelance Engineer",
  },
  {
    name: "jobTitle",
    values: "Junior Engineer",
  },
  {
    name: "jobTitle",
    values: "Mid-Level Engineer",
  },
  {
    name: "jobTitle",
    values: "Senior Engineer",
  },
  {
    name: "jobTitle",
    values: "Technical Lead",
  },
  {
    name: "interests",
    values: "Full-Stack Development",
  },
  {
    name: "interests",
    values: "Back-End Development",
  },
  {
    name: "interests",
    values: "Front-End Development",
  },
  {
    name: "interests",
    values: "DevOps",
  },
  {
    name: "interests",
    values: "Communication",
  },
  {
    name: "interests",
    values: "Management",
  },
]

