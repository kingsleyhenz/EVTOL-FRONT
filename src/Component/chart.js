import { Sparkline } from '@mantine/charts';

const DemoChart = ()=> {
  return (
    <Sparkline
      w={1110}
      h={400}
      data={[10, 20, 40, 20, 40, 10, 50]}
      curveType="monotone"
      color="springgreen"
      fillOpacity={0.9}
      strokeWidth={1}
    />
  );
}

export default DemoChart