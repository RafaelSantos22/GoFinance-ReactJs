type TransactionType = '+' | '-';

export type Transaction = {
    id: number;
    nome: string;
    data: string;
    categoria: string;
    valor: number;
    tipo: TransactionType;
}