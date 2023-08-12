import styles from './styles.module.css';
import TrendingUp from '../../assets/trending-up.svg';
import TrendingDown from '../../assets/trending-down.svg';
import CheckButton from '../../assets/check.svg';
import CancelIcon from '../../assets/cancel-icon.svg';
import { Button } from '../Button';

type Props = {
    onClose: () => void;
}

export const Form = ({ onClose }: Props) => {
    return (
        <>
            <form className={styles.formContainer}>
                <div className={styles.inputField}>
                    <label>Nome</label>
                    <input 
                        type="text" 
                        placeholder='Digite o nome da sua transação'
                    />
                </div>
                <div className={styles.inputField}>
                    <label>Data</label>
                    <input 
                        type="text" 
                        placeholder='Selecione a data da transação'
                    />
                </div>
                <div className={styles.inputField}>
                    <label>Categoria</label>
                    <input 
                        type="text" 
                        placeholder='Digite a categoria da sua transação'
                    />
                </div>
                <div className={styles.inputField}>
                    <label>Valor</label>
                    <input 
                        type="text"
                        placeholder='Digite o valor da sua transação'
                    />
                </div>
                <div className={styles.inputField}>
                    <label>Tipo</label>
                    <div className={styles.radioButtons}>
                        <div className={styles.radioButton}>
                            <input type="radio" name="option" value="op1" />
                            <img src={TrendingUp} alt="icone" />
                            <span>entrada</span>
                        </div>
                        <div className={styles.radioButton}>
                            <input type="radio" name="option" value="op2" />
                            <img src={TrendingDown} alt="icone" />
                            <span>Saída</span>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonsArea}>
                    <Button onClick={onClose} icon={CancelIcon}>Cancelar</Button>
                    <Button icon={CheckButton} isSpecial>Adicionar</Button>
                </div>
            </form>
        </>
    );
}