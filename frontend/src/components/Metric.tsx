import { Stat, StatNumber, StatHelpText } from "@chakra-ui/react";

interface MetricProps {
    statNumber: string
    statText: string
}

const Metric = ({statNumber, statText} : MetricProps) : JSX.Element => {
    return (
        <Stat>
            <StatNumber fontSize='5xl' textAlign='center' fontWeight='extrabold'>{statNumber}</StatNumber>
            <StatHelpText textAlign='center'>{statText}</StatHelpText>
        </Stat>
    );
};

export default Metric;