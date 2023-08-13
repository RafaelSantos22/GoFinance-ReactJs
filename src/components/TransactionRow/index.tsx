import { Transaction } from '../../types/Transaction';
import { valueFormatter } from '../../utils/valueFormatter';
import styles from './styles.module.css';

type Props = {
    transaction: Transaction;
}

const TransactionRow = ({ transaction }: Props) => {
    return (
        <tr className={styles.row}>
            <td>{transaction.nome}</td>
            <td>{transaction.data}</td>
            <td>{transaction.categoria}</td>
            <td>{valueFormatter(transaction.valor)}</td>
            <td className={transaction.tipo === '+' ? styles.positive : styles.negative}>
                {transaction.tipo}
            </td>       
         </tr>
    );
};

export default TransactionRow;
