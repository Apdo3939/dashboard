import './styles.css';

type Props = {
  value: number;
  label: string;
  icon: React.ReactNode;
};

export default function SalesSummaryCard({ icon, label, value }: Props) {
  return (
    <div className="sales-summary-card-container base-card">
      {icon}
      <h3 className="sales-summary-card-value">{value}</h3>
      <span className="sales-summary-card-label">{label}</span>
    </div>
  );
}
