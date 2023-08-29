import Metric from "./Metric";
import { Card } from "@chakra-ui/react";
import { FC } from "react";

interface MetricsProps {
  statNumber: string;
  statText: string;
  id: string;
}

interface Props {
  metricsProps: MetricsProps[];
}

const MetricSection: FC<Props> = ({ metricsProps }): JSX.Element => {
  return (
    <Card
      flexDirection="row"
      justifyContent="space-evenly"
      p="15px"
      width="65%"
    >
      {metricsProps.map((metric, index) => (
        <Metric
          key={metric.id}
          statNumber={metric.statNumber}
          statText={metric.statText}
        />
      ))}
    </Card>
  );
};

export default MetricSection;
