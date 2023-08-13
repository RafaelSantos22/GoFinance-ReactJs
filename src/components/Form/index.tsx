import styles from './styles.module.css';
import TrendingUp from '../../assets/trending-up.svg';
import TrendingDown from '../../assets/trending-down.svg';
import CheckButton from '../../assets/check.svg';
import CancelIcon from '../../assets/cancel-icon.svg';
import { Button } from '../Button';
import { useState } from 'react';
import { Transaction } from '../../types/Transaction';
import { valueInputFormat } from '../../utils/valueFormatter';
import { ErrorMessage } from '../ErrorMessage';
import { validateInputs } from '../../utils/validateInputs';

type Props = {
    onClose: () => void;
    addTransaction: (transaction: Transaction) => void;
}

export const Form = ({ onClose, addTransaction }: Props) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState('');
    const [type, setType] = useState<'+' | '-'>('+');
    const [transactionError, setTransactionError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const generateID = () => Math.round(Math.random() * 1000);

    const handleAddTransaction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const isValid = validateInputs(name, date, category, value, setTransactionError, setErrorMessage);

        if(isValid) {
            const newTransaction: Transaction = {
                id: generateID(),
                nome: name,
                data: date,
                categoria: category,
                valor: parseFloat(valueInputFormat(value)),
                tipo: type,
            };
            addTransaction(newTransaction);
            onClose();
        }
    };
    
    return (
        <>
            {transactionError && <ErrorMessage msg={errorMessage} />}
            <form className={styles.formContainer}>
                <div className={styles.inputField}>
                    <label>Nome</label>
                    <input 
                        type="text" 
                        placeholder='Digite o nome da sua transação'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className={styles.inputField}>
                    <label>Data</label>
                    <input 
                        type="text" 
                        placeholder='Selecione a data da transação'
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </div>
                <div className={styles.inputField}>
                    <label>Categoria</label>
                    <input 
                        type="text" 
                        placeholder='Digite a categoria da sua transação'
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    />
                </div>
                <div className={styles.inputField}>
                    <label>Valor</label>
                    <input 
                        type="text"
                        placeholder='Digite o valor da sua transação'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </div>
                <div className={styles.inputField}>
                    <label>Tipo</label>
                    <div className={styles.radioButtons}>
                        <div className={styles.radioButton}>
                            <input 
                                type="radio" 
                                name="option" 
                                value="+" 
                                checked={type === '+'}
                                onChange={() => setType('+')}
                            />
                            <img src={TrendingUp} alt="icone" />
                            <span>entrada</span>
                        </div>
                        <div className={styles.radioButton}>
                            <input 
                                type="radio" 
                                name="option" 
                                value="-" 
                                checked={type === '-'}
                                onChange={() => setType('-')}
                            />
                            <img src={TrendingDown} alt="icone" />
                            <span>Saída</span>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonsArea}>
                    <Button onClick={onClose} icon={CancelIcon}>Cancelar</Button>
                    <Button onClick={handleAddTransaction} icon={CheckButton} isSpecial>Adicionar</Button>
                </div>
            </form>
        </>
    );
}