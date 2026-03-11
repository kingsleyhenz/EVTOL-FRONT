import { Sparkline } from '@mantine/charts';

const DemoChart = ()=> {
  return (
    <Sparkline
      className="w-full h-full"
      data={[10, 20, 40, 20, 40, 10, 50, 40, 60, 50, 80, 70]}
      curveType="monotone"
      color="#ff4500"
      fillOpacity={0.1}
      strokeWidth={3}
    />
  );
}

export default DemoChart;