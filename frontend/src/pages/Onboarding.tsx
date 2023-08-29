import { useState, ChangeEvent } from "react";
import { Button, ButtonGroup, Flex, Spacer, Input, Heading, VStack, InputGroup, Textarea, FormLabel } from '@chakra-ui/react';

const Onboarding = () => {
    let [userInfo, setUserInfo] = useState({
        role: '',
        bio:'',
        expertise: '',
        learningGoals: '',
        experience: '',
        jobTitle: '',
        interests: '',
        hourlyRate: ''
    });

    const { role } = userInfo;

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //POST request logic goes here
        e.preventDefault();
        window.location.href='/home';
    };

    return (
        <Flex
            maxWidth='30%'
            gap={5}
            flexDirection='column'
            margin='auto'
        >
            <Flex
                border='1px'
                borderRadius='10'
                borderColor='lightgray'
                p={5}
            >
                <VStack
                    textAlign='center'
                    flexWrap='wrap'
                >
                    <Heading
                        fontSize='clamp(1rem, -0.875rem + 8.333vw, 2rem)'
                    >
                        Are you joining MentorShip as a mentor or mentee?
                    </Heading>
                    <Spacer />
                    <Spacer />
                    <ButtonGroup
                        size='lg'
                        flexWrap='wrap'
                    >
                        <Button onClick={() => setUserInfo({...userInfo, role: 'mentor'})}>Mentor</Button>
                        <Button onClick={() => setUserInfo({...userInfo, role: 'mentee'})}>Mentee</Button>
                    </ButtonGroup>
                </VStack>
            </Flex>
     
            {role && 
                <Flex
                    border='1px'
                    borderRadius='10'
                    borderColor='lightgray'
                    flexDirection='column'
                    rowGap={5}
                    textAlign='center'
                    p={5}
                >
      
                        <Heading>{(role === 'mentee' && 'Mentee') || (role === 'mentor' && 'Mentor')}</Heading>
                        <form onSubmit={handleSubmit}>
                            <Flex
                                flexDirection='column'
                                gap={10}
                            >
                                <InputGroup
                                    flexDirection='column'
                                    gap={10}
                                >
                                    <Flex
                                        flexDirection='column'
                                    >
                                        <FormLabel>Tell us a little about yourself.</FormLabel>
                                        <Textarea
                                            name='bio'
                                            value={userInfo.bio}
                                            onChange={handleChange}
                                        />
                                    </Flex>
                                    {role === 'mentor' && 
                                        <Flex 
                                            flexDirection='column'
                                        >
                                            <FormLabel>What are your areas of expertise?</FormLabel>
                                            <Textarea
                                                name='expertise'
                                                value={userInfo.expertise}
                                                onChange={handleChange}
                                            />
                                        </Flex>
                                    }
                                    {role === 'mentee' && 
                                        <Flex 
                                            flexDirection='column'
                                        >
                                            <FormLabel>What are you looking to learn?</FormLabel>
                                            <Textarea
                                                name='learningGoals'
                                                value={userInfo.learningGoals}
                                                onChange={handleChange}
                                            />
                                        </Flex>
                                    }
                                    <Flex 
                                        flexDirection='column'
                                    >
                                        <FormLabel>How many years of experience do you have as a software engineer?</FormLabel>
                                        <Input 
                                            name='experience'
                                            value={userInfo.experience}
                                            onChange={handleChange}
                                        />
                                    </Flex>
                                    <Flex 
                                        flexDirection='column'
                                    >
                                        <FormLabel>What is your current job title?</FormLabel>
                                        <Input 
                                            name='jobTitle'
                                            value={userInfo.jobTitle}
                                            onChange={handleChange}
                                        />
                                    </Flex>
                                    <Flex 
                                        flexDirection='column'
                                    >
                                        <FormLabel>What are your interests?</FormLabel>
                                        <Textarea
                                            name='interests'
                                            value={userInfo.interests}
                                            onChange={handleChange}
                                        />
                                    </Flex>
                                    {role === 'mentor' && 
                                        <Flex 
                                            flexDirection='column'
                                        >
                                            <FormLabel>What is your hourly rate? Leave as 0 for free mentoring.</FormLabel>
                                            <Input 
                                                name='hourlyRate'
                                                value={userInfo.hourlyRate}
                                                onChange={handleChange}
                                            />
                                        </Flex>
                                    }
                                </InputGroup>
                            </Flex>
                            <br />
                            <Button type='submit'>Submit</Button>
                        </form>

                </Flex>
            }
        </Flex>
    );

};

export default Onboarding;