export interface Field {
    inputType: string;
    label: string;
    name: string;
}
export interface UserData {
    name?: string;
    email?: string;
    dateOfBirth?: string;
    yearsOfExperience?: number;
    currentJobTitle?: string;
    AreasOfExpertise?: string[];
    rate?: number;
    interests?: string[];
    aboutMe?: string;
    id?: string;
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
