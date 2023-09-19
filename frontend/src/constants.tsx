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
    options: ["0-2 years", "2-4 years", "4-6 years", "6-8 years", "8-10 years", "10+ years"],
  },
  {
    inputType: 'other',
    label: 'What is your current job title?',
    name: 'jobTitle',
    options: ["Unemployed/ Non-Tech", "Freelance Engineer", "Junior Engineer", "Mid-Level Engineer", "Senior Engineer", "Technical Lead"],
  },
  {
    inputType: 'other',
    label: 'What are your interests?',
    name: 'interests',
    options: ["Full-Stack Development", "Front-End Development", "Back-End Development", "DevOps", "Management", "Communications"]
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