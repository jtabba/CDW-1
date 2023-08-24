import Metric from "./Metric";
import { Card } from '@chakra-ui/react';

interface MetricsProps {
    statNumber: string
    statText: string
    id: string
  }
  
  interface Props {
    metricsProps : MetricsProps[]; 
  }

const MetricSection = ({ metricsProps } : Props) : JSX.Element => {

    const metrics = metricsProps.map((metric, index) => <Metric key={metric.id} statNumber={metric.statNumber} statText={metric.statText}/> );
    return (
        <Card
            flexDirection='row'
            justifyContent='space-evenly'
            p='15px'
            width='65%'
        >
            {metrics}
        </Card>
    );
};

export default MetricSection;