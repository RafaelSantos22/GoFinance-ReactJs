import styles from './styles.module.css';
import { Header } from "../../components/Header";
import { ResumeItem } from '../../components/ResumeItem';
import TrendingUp from '../../assets/trending-up.svg';
import TrendingDown from '../../assets/trending-down.svg';
import DolarIcon from '../../assets/dolar-icon.svg';
//import { useState } from 'react';

export const Home = () => {
    //const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.areaTransactions}>
                <ResumeItem txt='Entradas' icon={TrendingUp} value='1000'/>
                <ResumeItem txt='Saídas' icon={TrendingDown} value='1000'/>
                <ResumeItem txt='Saldo' icon={DolarIcon} value='1000'/>
            </div>
        </div>
    );
}