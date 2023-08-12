import styles from './styles.module.css';
import { Header } from "../../components/Header";

export const Home = () => {
    return (
        <div className={styles.container}>
            <Header />
        </div>
    );
}