import incomeImg from '../../assets/income.svg'

import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import {  useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function Summary() {
  const {transactions} = useTransactions();
 

const summary = transactions.reduce((acc, transaction) => {
  switch (transaction.type) {
    case 'deposit':
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    break;

    case 'withdraw':
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    break;
  
  }
  return acc;
},{
  deposits: 0,
  withdraws: 0,
  total: 0
}
)

  return(
    <Container>

      <div className="banner">
      <div className="bgEntrada"></div>
              <header>
               <p>Entradas</p>
                <img src={incomeImg} alt="Entradas"/>
                    </header>
                    <strong>{new Intl.NumberFormat('pt-BR',{
                              style: 'currency',
                              currency: 'BRL'
                            }).format(summary.deposits)}</strong>
                  </div>
        
       

      <div className="banner">
      <div className="bgSaida"></div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas"/>
        </header>
        <strong>- {new Intl.NumberFormat('pt-BR',{
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.withdraws)}</strong>
      </div>
  

      <div className="banner">
      <div className="bgTotal"></div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR',{
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.total)}</strong>
      </div>




    </Container>
  );
  
}