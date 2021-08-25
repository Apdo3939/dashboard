import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helpers';

const initialDate = [
  { x: '2020-01-01', y: 125 },
  { x: '2020-02-01', y: 210 },
  { x: '2020-03-01', y: 180 },
  { x: '2020-04-01', y: 120 },
  { x: '2020-05-01', y: 160 },
  { x: '2020-06-01', y: 250 }
];

export default function SalesByDate() {
  return (
    <div className="sales-by-date-container">
      <div>
        <h4 className="sales-by-date-title">Evolução das vendas</h4>
        <span className="sales-by-date-period">18-01-2020 à 18-01-2021</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity-sales">500.000,00</h2>
          <span className="sales-by-date-quantity-label">Vendas no período</span>
          <span className="sales-by-date-quantity-description">
            O gráfico mostra as vendas em todas as lojas
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Vendas', data: initialDate }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}
