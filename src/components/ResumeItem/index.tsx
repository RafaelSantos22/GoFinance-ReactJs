import { valueFormatter } from '../../utils/valueFormatter';
import styles from './styles.module.css';

type Props = {
    txt: string;
    icon: string;
    value?: number;
    isCustom?: boolean;
    onClick?: () => void;
}

export const ResumeItem = ({ txt, icon, value, isCustom, onClick }: Props) => {
    const formattedValue = value !== undefined ? valueFormatter(value) : ''; 
    const [integerPart, decimalPart] = formattedValue.split(',');

    return (
        <div className={`${styles.card} ${isCustom ? styles.customCard : ''}`}
        onClick={onClick}
        >
            {isCustom ? (
                <>
                    <img src={icon} alt="icon" />
                    <p>{txt}</p>
                </>
            ): (
                <div className={styles.valueBox}>
                    <p>{txt}</p>
                    <img src={icon} alt="icon" />
                </div>
            )}
            {value !== undefined && (
        <h2 className={styles.cardValue}>
          {integerPart},
          <span className={styles.smallDecimal}>{decimalPart}</span>
        </h2>
      )}
        </div>
    );
}