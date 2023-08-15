import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
  isSpecial?: boolean;
  icon: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button = ({ children, isSpecial, icon, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${isSpecial ? styles.specialButton : ''}`}
    >
      {icon && <img src={icon} alt="icon" />}
      {children}
    </button>
  );
};
