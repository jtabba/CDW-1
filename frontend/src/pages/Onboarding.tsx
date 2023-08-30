import React, { useState, ChangeEvent } from "react";
import { Button, ButtonGroup, Flex, InputGroup } from '@chakra-ui/react';
import FormRow from "../components/FormRow";
import FormContainer from '../components/FormContainer';

interface Persona {
    role: string
}

interface MenteeInfo {
    role: string
    bio: string
    learningGoals: string
    experience: string
    jobTitle: string
    interests: string
}

interface MentorInfo {
    role: string
    bio: string
    expertise: string
    experience: string
    jobTitle: string
    interests: string
    hourlyRate: string
}

const Onboarding = () => {

    let [persona, setPersona] = useState<Persona>({
        role: ''
    });

    let [menteeInfo, setMenteeInfo] = useState<MenteeInfo>({
        role: 'mentee',
        bio:'',
        learningGoals: '',
        experience: '',
        jobTitle: '',
        interests: '',
    });

    let [mentorInfo, setMentorInfo] = useState<MentorInfo>({
        role: 'mentor',
        bio:'',
        expertise: '',
        experience: '',
        jobTitle: '',
        interests: '',
        hourlyRate: ''
    });

    const menteeFields = [
        {inputType: 'textArea', label: 'Tell us a little about yourself!', name: 'bio'},
        {inputType: 'textArea', label: 'What are you looking to learn?', name: 'learningGoals'},
        {inputType: 'input', label: 'How many years of experience do you have as a software engineer?', name: 'experience'},
        {inputType: 'input', label: 'What is your current job title?', name: 'jobTitle'},
        {inputType: 'textArea', label: 'What are your interests?', name: 'interests'}
    ];

    const mentorFields = [
        {inputType: 'textArea', label: 'Tell us a little about yourself!', name: 'bio'},
        {inputType: 'textArea', label: 'What are your areas of expertise?', name: 'expertise'},
        {inputType: 'input', label: 'How many years of experience do you have as a software engineer?', name: 'experience'},
        {inputType: 'input', label: 'What is your current job title?', name: 'jobTitle'},
        {inputType: 'textArea', label: 'What are your interests?', name: 'interests'},
        {inputType: 'textArea', label: 'WWhat is your hourly rate? Leave as 0 for free mentoring.', name: 'hourlyRate'}
    ];

    const { role } = persona;
  
    const renderRoleComponent = () => {
        if(role === 'mentee') {
            return (
                <FormContainer
                    heading='Mentee'
                >
                    <form onSubmit={handleSubmit}>
                        <Flex
                            flexDirection='column'
                            gap={10}
                        >
                            <InputGroup
                                flexDirection='column'
                                gap={10}
                            >
                                {menteeFields.map((field, index) => 
                                    <FormRow
                                        key={index}
                                        inputType={field.inputType} 
                                        label={field.label} 
                                        name={field.name} 
                                        flexDirection='column' 
                                        fontSize='clamp(1.3rem, -0.875rem + 8.333vw, 1rem)'
                                        value={menteeInfo[field.name as keyof MenteeInfo]} 
                                        onChange={handleChange}
                                    />)
                                }
                            </InputGroup>
                        </Flex>
                        <br />
                        <Button size='lg' type='submit'>Submit</Button>
                    </form>
                </FormContainer>
            );
        } else if (role === 'mentor') {
            return (
                <FormContainer
                    heading='Mentor'
                >
                    <form onSubmit={handleSubmit}>
                        <Flex
                            flexDirection='column'
                            gap={10}
                        >
                            <InputGroup
                                flexDirection='column'
                                gap={10}
                            >
                                {mentorFields.map((field, index) => 
                                    <FormRow
                                        key={index}
                                        inputType={field.inputType} 
                                        label={field.label} 
                                        name={field.name} 
                                        flexDirection='column' 
                                        fontSize='clamp(1.3rem, -0.875rem + 8.333vw, 1rem)'
                                        value={mentorInfo[field.name as keyof MentorInfo]} 
                                        onChange={handleChange}
                                    />)
                                }
                            </InputGroup>
                        </Flex>
                        <br />
                        <Button size='lg' type='submit'>Submit</Button>
                    </form>
                </FormContainer>
            );
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        role === 'mentee' ? setMenteeInfo({ ...menteeInfo, [e.target.name]: e.target.value }) :
        setMentorInfo({ ...mentorInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //POST request logic goes here
        e.preventDefault();
        window.location.href='/home';
    };

    return (
        <Flex
            maxWidth={{base: '100%', sm: '90%', md: '80%', lg: '60%', xl: '40%'}}
            rowGap={5}
            flexDirection='column'
            margin='auto'
            marginTop={[30,50,100]}
        >
            <FormContainer
                heading='Are you joining MentorShip as a mentor or mentee?'
            >
                <ButtonGroup
                        size='lg'
                        flexWrap='wrap'
                        justifyContent='center'
                >
                    <Button onClick={() => setPersona({role: 'mentor'})}>Mentor</Button>
                    <Button onClick={() => setPersona({role: 'mentee'})}>Mentee</Button>
                </ButtonGroup>
            </FormContainer>
            {renderRoleComponent()}
        </Flex>
    );

};

export default Onboarding;