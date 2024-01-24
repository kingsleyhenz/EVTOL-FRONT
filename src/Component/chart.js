import { Sparkline } from '@mantine/charts';

const DemoChart = ()=> {
  return (
    <Sparkline
      w={800}
      h={100}
      data={[10, 20, 40, 20, 40, 10, 50]}
      curveType="monotone"
      color="blue"
      fillOpacity={0.6}
      strokeWidth={2}
      style={{width: '100%', height: '400px'}}
    />
  );
}

export default DemoChart