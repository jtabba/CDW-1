import React from "react";

interface Mentor {
  name?: string;
  email?: string;
  dateOfBirth?: string;
  yearsOfExperience?: number;
  currentJobTitle?: string;
  AreasOfExpertise?: string[];
  rate?: number;
  interests?: string[];
  aboutMe?: string;
  id: string;
}

export default function Mentors() {
  const Steve: Mentor = {
    id: "42",
    name: "Steve",
  };

  const Tom: Mentor = {
    name: "Tom",
    id: "34",
  };

  const mentors: Mentor[] = [Steve, Tom];
  return (
    <div>
      <h1>Mentors Page Welcomes You</h1>
      {mentors.map((person) => (
        <div>
          <p>{person?.name}</p>
          <p>{person?.id}</p>
        </div>
      ))}
    </div>
  );
}
