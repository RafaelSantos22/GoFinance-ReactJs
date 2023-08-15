import { Transaction } from '../../types/Transaction';
import { valueFormatter } from '../../utils/valueFormatter';
import styles from './styles.module.css';

type Props = {
  transaction: Transaction;
};

const TransactionRow = ({ transaction }: Props) => {
  const formattedValue = valueFormatter(transaction.valor);
  const isNegative = transaction.tipo === '-';

  return (
    <tr className={styles.row}>
      <td>{transaction.nome}</td>
      <td>{transaction.data}</td>
      <td>{transaction.categoria}</td>
      <td className={isNegative ? styles.negativeValue : ''}>
        {isNegative && '- '}
        {formattedValue}
      </td>
      <td
        className={transaction.tipo === '+' ? styles.positive : styles.negative}
      >
        {transaction.tipo}
      </td>
    </tr>
  );
};

export default TransactionRow;
