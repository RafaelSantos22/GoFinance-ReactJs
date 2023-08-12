import { Form } from '../Form';
import styles from './styles.module.css';

type Props = {
    isOpen: boolean;
    closeModal: () => void;
}

export const NewTransactionModal = ({ isOpen, closeModal }: Props) => {
    if (isOpen) {
        return (
            <div className={styles.modalInit}>
                <div className={styles.modal}>
                    <header className={styles.header}>
                        <h2>Nova transação</h2>
                    </header>    
                    <Form onClose={closeModal} />
                </div>        
            </div>
        );
    }

    return null;
}