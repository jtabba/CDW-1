import { Flex, Box, Avatar, Spacer } from '@chakra-ui/react';

export default function Profile(){
    return (
        <Flex align="center" justify="center" direction="column">
            <Flex mb={6}>
                {/* Profile Photo and Name */}
                <Avatar size="2xl" name="Place Holder" src="https://bit.ly/ryan-florence"></Avatar>
                <Spacer />
                <h1>Place Holder</h1>
            </Flex>

            <Flex mb={6}>
            {/* Skills */}
            <div></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus odit labore nostrum eligendi fugit magni quaerat deserunt commodi laboriosam molestiae dicta assumenda praesentium, sunt consequatur, sint facere ex possimus.</p>
            </Flex>

            <Flex mb={6}>
            {/* About */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem error dolores nemo pariatur quae tempora est adipisci reprehenderit nulla at impedit veritatis debitis molestiae reiciendis, consectetur blanditiis incidunt! Eum?</p>
            </Flex>

            <Flex mb={6}> 
            {/* Experience */}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nulla nam eveniet, suscipit reprehenderit eum cupiditate aperiam itaque consequatur vitae voluptatibus fugiat maxime possimus enim. Totam maxime asperiores fuga in!</p>
            </Flex>

            <Flex mb={6}> 
            {/* Goals */}
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ipsam, ex, voluptas veniam eveniet eligendi exercitationem ea omnis maiores ad amet alias voluptatem dolore sint optio odit esse voluptate tempore!</p>
            </Flex>











        </Flex>
    );
}