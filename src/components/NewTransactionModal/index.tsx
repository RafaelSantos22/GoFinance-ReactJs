import { Transaction } from '../../types/Transaction';
import { Form } from '../Form';
import styles from './styles.module.css';

type Props = {
    isOpen: boolean;
    closeModal: () => void;
    addTransaction: (transaction: Transaction) => void;
}

export const NewTransactionModal = ({ isOpen, closeModal, addTransaction }: Props) => {
    if (isOpen) {
        return (
            <div className={styles.modalInit}>
                <div className={styles.modal}>
                    <header className={styles.header}>
                        <h2>Nova transação</h2>
                    </header>    
                    <Form addTransaction={addTransaction} onClose={closeModal} />
                </div>        
            </div>
        );
    }

    return null;
}