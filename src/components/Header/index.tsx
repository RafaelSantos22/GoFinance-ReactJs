import styles from './styles.module.css';
import CreditCardIcon from '../../assets/credit-card.svg';
import UserPhoto from '../../assets/user-photo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <img src={CreditCardIcon} alt="creditcard" />
        <h1>Raro Finanças</h1>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.details}>
          <p>Samantha Freitas</p>
          <span>sam.freitas@example.com</span>
        </div>
        <img src={UserPhoto} alt="foto do usuário" />
      </div>
    </header>
  );
};
