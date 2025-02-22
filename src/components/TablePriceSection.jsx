import "./../styles/TablePriceSection.css";
import suralogo from "./../assets/sura-logo.png"
const TablePriceSection = () => {
  return (
    <div id="table-container">
      <div id="header">
        <h1>Tarifas Mensuales<br />Póliza de Salud 2025 </h1>
        <img src={suralogo} alt="SURA Logo" id="header-image" />
      </div>

      <table id="pricing-table">
        <thead>
          <tr>
            <th>Edad</th>
            <th>Evoluciona</th>
            <th>Clásico</th>
            <th>Global</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00 - 14</td>
            <td>$330,697</td>
            <td>$411,619</td>
            <td>$540,473</td>
          </tr>
          <tr>
            <td>15 - 40</td>
            <td>$389,572</td>
            <td>$503,356</td>
            <td>$601,726</td>
          </tr>
          <tr>
            <td>41 - 50</td>
            <td>$547,393</td>
            <td>$698,866</td>
            <td>$840,159</td>
          </tr>
          <tr>
            <td>51 - 59</td>
            <td>$810,705</td>
            <td>$1,041,373</td>
            <td>$1,269,404</td>
          </tr>
          <tr>
            <td>60 - 65</td>
            <td>$1,245,057</td>
            <td>$1,562,252</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablePriceSection;
