import { useState } from "react";
import { Button, ButtonGroup, Flex, Spacer, Input, FormControl, Heading, VStack, InputGroup, Textarea, FormLabel } from '@chakra-ui/react';

const Onboarding = () => {

    let [role, setRole] = useState<string | null>(null);

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
            {/* Mentee or Mentor */}
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
                        <Button onClick={() => setRole('mentor')}>Mentor</Button>
                        <Button onClick={() => setRole('mentee')}>Mentee</Button>
                    </ButtonGroup>
                </VStack>
            </Flex>
            {/* Mentee */}
            {role === 'mentee' && 
                <Flex
                    border='1px'
                    borderRadius='10'
                    borderColor='lightgray'
                    flexDirection='column'
                    rowGap={5}
                    textAlign='center'
                    p={5}
                >
      
                        <Heading>Mentee</Heading>
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
                                    <Textarea/>
                                </Flex>
                                <Flex 
                                    flexDirection='column'
                                >
                                    <FormLabel>What are you looking to learn?</FormLabel>
                                    <Textarea/>
                                </Flex>
                                <Flex 
                                    flexDirection='column'
                                >
                                    <FormLabel>How many years of experience do you have as a software engineer?</FormLabel>
                                    <Input />
                                </Flex>
                                <Flex 
                                    flexDirection='column'
                                >
                                    <FormLabel>What is your current job title?</FormLabel>
                                    <Input />
                                </Flex>
                                <Flex 
                                    flexDirection='column'
                                >
                                    <FormLabel>What are your interests?</FormLabel>
                                    <Textarea/>
                                </Flex>
                            </InputGroup>
                            </Flex>
                            <br />
                            <Button type='submit'>Submit</Button>
                        </form>

                </Flex>
            }

            {/* Mentor */}
            {role === 'mentor' && 
                <Flex
                border='1px'
                borderRadius='10'
                borderColor='lightgray'
                flexDirection='column'
                rowGap={5}
                textAlign='center'
                p={5}
            >
                    <Heading>Mentor</Heading>
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
                                    <Textarea/>
                                </Flex>
                                <Flex 
                                    flexDirection='column'
                                >
                                    <FormLabel>What are your areas of expertise?</FormLabel>
                                    <Textarea/>
                                </Flex>
                                <Flex 
                                    flexDirection='column'
                                >
                                    <FormLabel>How many years of experience do you have as a software engineer?</FormLabel>
                                    <Input />
                                </Flex>
                                <Flex 
                                    flexDirection='column'
                                >
                                    <FormLabel>What is your current job title?</FormLabel>
                                    <Input />
                                </Flex>
                                <Flex 
                                    flexDirection='column'
                                >
                                    <FormLabel>What are your interests?</FormLabel>
                                    <Textarea/>
                                </Flex>
                                <Flex 
                                    flexDirection='column'
                                >
                                    <FormLabel>What is your hourly rate? Leave as 0 for free mentoring.</FormLabel>
                                    <Input />
                                </Flex>
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