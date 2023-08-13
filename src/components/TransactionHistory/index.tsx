import { Transaction } from '../../types/Transaction';
import TransactionRow from '../TransactionRow';
import styles from './styles.module.css';

type Props = {
    transactions: Transaction[];      
}

export const TransactionHistory = ({ transactions }: Props) => {
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
                    {transactions.map((transaction, index) => (
                        <TransactionRow key={index} transaction={transaction} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}