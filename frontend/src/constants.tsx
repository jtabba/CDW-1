export const QUESTIONNAIRE_FIELDS = [
  {
    inputType: 'textArea',
    label: 'Tell us a little about yourself!',
    name: 'bio',
  },
  {
    inputType: 'input',
    label: 'How many years of experience do you have as a software engineer?',
    name: 'experience',
  },
  {
    inputType: 'input',
    label: 'What is your current job title?',
    name: 'jobTitle',
  },
  {
    inputType: 'textArea',
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
