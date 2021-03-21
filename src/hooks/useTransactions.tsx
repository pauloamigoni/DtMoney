
import { useEffect, useState, createContext, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}
// interface TransactionInput {
//   title: string;
//   amount: number;
//   category: string;
//   type: string;
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'category' | 'type' >;

interface TransactionProvicerProps{
  children: ReactNode;
}

interface TransactionContextData{
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

 const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
  );

export function TransactionProvider({children} :TransactionProvicerProps ) {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

    useEffect(() => {
      api.get('transactions')
      .then(response => setTransaction(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date() 
    });
    const { transaction }  = response.data;
    setTransaction([
      ...transactions,
      transaction,
    ])

    }

    return(
      <TransactionsContext.Provider value={{transactions, createTransaction}}>
        {children}
      </TransactionsContext.Provider>
    )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}