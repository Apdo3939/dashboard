import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import SalesTable from './components/sales-table';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            labels={['Campo grande', 'Bangu', 'Santa Cruz', 'Paciência']}
            name="Lojas"
            series={[1, 2, 3, 4]}
          />
          <PieChartCard
            labels={['Rio de janeiro', 'São Paulo', 'Minas Gerais', 'Espírito Santo']}
            name="Estados"
            series={[1, 2, 3, 4]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
