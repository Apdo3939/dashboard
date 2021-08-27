import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

export default function PieChartCard({ labels, name, series }: Props) {
  return (
    <div className="pie-chart-card-container">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="320"
        height="320"
        series={series}
      />
    </div>
  );
}
