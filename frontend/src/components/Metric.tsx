import { Stat, StatNumber, StatHelpText } from "@chakra-ui/react";
import { FC } from 'react';

interface MetricProps {
    statNumber: string
    statText: string
}

const Metric: FC<MetricProps> = ({statNumber, statText}) => {
    return (
        <Stat>
            <StatNumber fontSize='5xl' textAlign='center' fontWeight='extrabold'>{statNumber}</StatNumber>
            <StatHelpText textAlign='center'>{statText}</StatHelpText>
        </Stat>
    );
};

export default Metric;