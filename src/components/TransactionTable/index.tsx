import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './style';

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title">Desenvolvimento de Website</td>
            <td className="deposit ">R$ 21000,00</td>
            <td>Desenvolvimento</td>
            <td>20/06/2021</td>
          </tr>
          <tr>
            <td className="title">Aluguel</td>
            <td className="withdraw">R$ -1000,00</td>
            <td>casa</td>
            <td>28/06/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
