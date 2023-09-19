export interface Field {
    inputType: string;
    label: string;
    name: string;
    options?: string[];
}

export interface QuestionnaireInfo {
    role: string;
    bio: string;
    experience: string;
    jobTitle: string;
    interests: string;
  }

export interface MentorInfo extends QuestionnaireInfo {
    expertise: string;
    hourlyRate: string;
}

export interface MenteeInfo extends QuestionnaireInfo {
    learningGoals: string;
}


