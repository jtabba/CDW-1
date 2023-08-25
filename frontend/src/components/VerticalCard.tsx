import { QuestionIcon } from '@chakra-ui/icons';
import { Flex, Text, Card, CardBody, CardFooter, Link, Heading, Spacer, CardHeader} from '@chakra-ui/react';
import { FC } from 'react';

interface VerticalCardProps {
    headline: string
    content: string
    linkLabel: string
    url:string
}

const VerticalCard: FC<VerticalCardProps> = ({headline, content, linkLabel, url} : VerticalCardProps) => {
    return(
        <Card
        flexDirection='column'
        >
            <CardHeader>
                <QuestionIcon />
            </CardHeader>
            <CardBody>
                <Flex
                flexDirection='column'
                rowGap={2}
                >
                    <Heading>
                        {headline}
                    </Heading>
                    <Text>
                        {content}
                    </Text>
                </Flex>
            </CardBody>
            <CardFooter>
                <Link href={url } textDecoration='underline'>
                    {linkLabel}
                </Link>
            </CardFooter>
        </Card>
    );
};

export default VerticalCard;