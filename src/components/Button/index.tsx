import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
  isSpecial?: boolean;
  icon: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type: 'button' | 'submit';
};

export const Button = ({ children, isSpecial, icon, onClick, type }: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${isSpecial ? styles.specialButton : ''}`}
    >
      {icon && <img src={icon} alt="icon" />}
      {children}
    </button>
  );
};
