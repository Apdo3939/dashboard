import './styles.css';
import SalesSummaryCard from './salesSummaryCard';
import { ReactComponent as Avatar } from '../../assets/avatar-icon.svg';
import { ReactComponent as Chart } from '../../assets/chart-icon.svg';
import { ReactComponent as Done } from '../../assets/done-icon.svg';
import { ReactComponent as Loop } from '../../assets/loop-icon.svg';

export default function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard icon={<Done />} label="Média" value={500} />
      <SalesSummaryCard icon={<Loop />} label="Quantidade" value={2500} />
      <SalesSummaryCard icon={<Chart />} label="Mínima" value={500} />
      <SalesSummaryCard icon={<Avatar />} label="Máxima" value={1000} />
    </div>
  );
}
