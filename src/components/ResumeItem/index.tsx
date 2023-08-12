import styles from './styles.module.css';

type Props = {
    txt?: string;
    icon?: string;
    value?: string;
    isCustom?: boolean;
    onClick?: () => void;
}

export const ResumeItem = ({ txt, icon, value, isCustom, onClick }: Props) => {
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
           
            <h2>{value}</h2>
        </div>
    );
}