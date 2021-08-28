import './styles.css';

export default function SalesTable() {
  return (
    <div className="sales-table-container base-card">
      <h4 className="sales-table-title">Vendas Correntes</h4>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>100</td>
            <td>15-11-2020</td>
            <td>Masculino</td>
            <td>Todas</td>
            <td>Todas</td>
            <td>Cash</td>
            <td>15000</td>
          </tr>
          <tr>
            <td>101</td>
            <td>10-11-2020</td>
            <td>Masculino</td>
            <td>Todas</td>
            <td>Todas</td>
            <td>Cash</td>
            <td>14000</td>
          </tr>
          <tr>
            <td>102</td>
            <td>05-11-2020</td>
            <td>Feminino</td>
            <td>Todas</td>
            <td>Todas</td>
            <td>Cash</td>
            <td>25000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
