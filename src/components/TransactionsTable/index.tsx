import {  useTransactions } from "../../hooks/useTransactions";
import { Container, Perfil, Hero, Breweries } from "./styles";
import  avatarImg  from '../../assets/avatar.jpg';


export function TransactionTable() {
  const {transactions} = useTransactions();

  return(
    <>
   

    <Hero>
  
      
        <Container>


      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
        {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR',{
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)} </td>
              <td>{transaction.category}</td>
              <td> {new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )} 
              </td>
            </tr>
        ))}
        </tbody>
      </table>

    



    </Container>

    <Perfil>
              <div className="profile-card">
                <div className="img-area">
                    <div className="inner-area">
                      <img src={avatarImg} alt="" />
                    </div>
                </div>
                  <div className="name">Paulo Henrique Amigoni</div>
                  <div className="about">paulo.amigoni@gmail.com</div>
              </div>
        </Perfil>

      
      
    </Hero>

    <Breweries>
    <ul>
      <li>
        <figure>
          <img src="https://pedido.aqpago.com.br/48-home_default/linkpay-pagamento-online.jpg" alt="Several hands holding beer glasses" />
          <figcaption><h3>Entrada</h3></figcaption>
        </figure>
      </li>

      <li>
        <figure>
          <img src="https://pedido.aqpago.com.br/48-home_default/linkpay-pagamento-online.jpg" alt="Several hands holding beer glasses" />
          <figcaption><h3>Saída</h3></figcaption>
        </figure>
      </li>

      <li>
        <figure>
          <img src="https://pedido.aqpago.com.br/48-home_default/linkpay-pagamento-online.jpg" alt="Several hands holding beer glasses" />
          <figcaption><h3>Total</h3></figcaption>
        </figure>
      </li>

    

    
    
    </ul>
  </Breweries>




    </>
  );
  
}