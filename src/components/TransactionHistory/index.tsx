import { transactions } from '../../data/transactions';
import TransactionRow from '../TransactionRow';
import styles from './styles.module.css';

export const TransactionHistory = () => {
    return (
        <div className={styles.transactions}>
            <h2>Histórico de transações</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                        <th className={styles.type}>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <TransactionRow transaction={transaction} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}