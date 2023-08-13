import styles from './styles.module.css';

type Props = {
    msg: string;
}

export const ErrorMessage = ({ msg }: Props) => {
    return (
        <div className={styles.error}>{msg}</div>
    );
}