import { Transaction } from "../types/Transaction";

export const transactions: Transaction[] = [
    {
      id: 1,
      nome: 'Venda de celular antigo',
      data: '2023-08-12',
      categoria: 'Categoria 1',
      valor: 1.853,
      tipo: '+',
    },
    {
      id: 2,
      nome: 'Transação 2',
      data: '2023-08-13',
      categoria: 'Categoria 2',
      valor: 50.000,
      tipo: '-',
    },
];