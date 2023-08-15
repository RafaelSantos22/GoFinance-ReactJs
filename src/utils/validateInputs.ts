import { isValidDate } from './regex';

export const validateInputs = (
  name: string,
  date: string,
  category: string,
  value: string,
  setTransactionError: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
): boolean => {
  const isFormValid =
    name !== '' && date !== '' && category !== '' && value !== '';

  if (!isFormValid) {
    setTransactionError(true);
    setErrorMessage('Preencha todos os campos!');
    setTimeout(() => {
      setTransactionError(false);
    }, 1000);
    return false;
  }

  if (name.length <= 3) {
    setTransactionError(true);
    setErrorMessage('O nome deve ter mais de 3 caracteres');
    setTimeout(() => {
      setTransactionError(false);
    }, 1000);
    return false;
  }

  if (!isValidDate(date)) {
    setTransactionError(true);
    setErrorMessage('Data inválida. Utilize o formato DD/MM/YYYY.');
    setTimeout(() => {
      setTransactionError(false);
    }, 1000);
    return false;
  }
  return true;
};
