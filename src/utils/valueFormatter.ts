export const valueFormatter = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);

export const valueInputFormat = (value: string) => {
  return value.replace(/[^\d,.]/g, '').replace(',', '.');
};
