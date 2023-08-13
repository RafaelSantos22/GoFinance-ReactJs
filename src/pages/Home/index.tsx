import styles from './styles.module.css';
import { ResumeItem } from '../../components/ResumeItem';
import { Header } from "../../components/Header";
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

  const addTransaction = (newTransaction: Transaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.areaTransactions}>
        <ResumeItem txt='Entradas' icon={TrendingUp} value='1000'/>
        <ResumeItem txt='Saídas' icon={TrendingDown} value='1000'/>
        <ResumeItem txt='Saldo' icon={DolarIcon} value='1000'/>
        <ResumeItem onClick={() => setIsModalOpen(true)} txt='Transação' icon={PlusIcon} isCustom={true} />
      </div>
      <div className={styles.content}>
        <TransactionHistory transactions={transactions}/>
      </div>
      <NewTransactionModal addTransaction={addTransaction} isOpen={isModalOpen} closeModal={() => setIsModalOpen(!isModalOpen)} />
      <Footer />
    </div>
  );
}
