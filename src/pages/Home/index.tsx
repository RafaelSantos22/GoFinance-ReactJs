import styles from './styles.module.css';
import { ResumeItem } from '../../components/ResumeItem';
import { Header } from '../../components/Header';
import TrendingUp from '../../assets/trending-up.svg';
import TrendingDown from '../../assets/trending-down.svg';
import DolarIcon from '../../assets/dolar-icon.svg';
import PlusIcon from '../../assets/plus-sm.svg';
import { useState } from 'react';
import { NewTransactionModal } from '../../components/NewTransactionModal';
import { TransactionHistory } from '../../components/TransactionHistory';
import { Footer } from '../../components/Footer';
import { Transaction } from '../../types/Transaction';

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const addTransaction = (newTransaction: Transaction) => {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);

    const amountExpense = updatedTransactions
      .filter(item => item.tipo === '-')
      .map(transaction => Number(transaction.valor));

    const amountIncome = updatedTransactions
      .filter(item => item.tipo === '+')
      .map(transaction => Number(transaction.valor));

    const totalExpense = amountExpense.reduce((acc, value) => acc + value, 0);
    const totalIncome = amountIncome.reduce((acc, value) => acc + value, 0);

    setIncome(totalIncome);
    setExpense(totalExpense);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.areaTransactions}>
        <ResumeItem txt="Entradas" icon={TrendingUp} value={income} />
        <ResumeItem txt="Saídas" icon={TrendingDown} value={expense} />
        <ResumeItem txt="Saldo" icon={DolarIcon} value={income - expense} />
        <ResumeItem
          onClick={() => setIsModalOpen(true)}
          txt="Transação"
          icon={PlusIcon}
          isCustom={true}
        />
      </div>
      <div className={styles.content}>
        <TransactionHistory transactions={transactions} />
      </div>
      <NewTransactionModal
        addTransaction={addTransaction}
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(!isModalOpen)}
      />
      <Footer />
    </div>
  );
};
