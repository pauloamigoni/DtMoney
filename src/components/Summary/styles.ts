
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem; /* Espaçamento */
  margin-top: -6rem;

  div{
    background: var(--shape);
    padding: 1.5rem 1rem;
    border-radius: 0.99rem;
    color: var(--text-title);

    &.banner {
      position: relative;
      z-index: 1;
      font-size: 1.25rem;
      color: var(--text-title);
      
    }

    &.banner .bgSaida {
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -10;
      background-position: calc(100% + 1.4rem) bottom;
      background-image: url("https://pedido.aqpago.com.br/48-home_default/linkpay-pagamento-online.jpg");
      background-repeat: no-repeat;
      opacity: .4;
    }

    &.banner .bgEntrada {
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -10;
      background-position: calc(100% + 1.4rem) bottom;
      background-image: url("https://pedido.aqpago.com.br/48-home_default/linkpay-pagamento-online.jpg");
      background-repeat: no-repeat;
      opacity: .4;
       
      color: #fff;

          }
     
    &.banner .bgTotal {
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -10;
      background-position: calc(100% + 1.4rem) bottom;
      background-image: url("https://pedido.aqpago.com.br/48-home_default/linkpay-pagamento-online.jpg");
      background-repeat: no-repeat;
      opacity: .4;
      background-color: green;

     
      
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
     
    }

    strong{
      display: block;
      margin-top: 1rem;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 2rem;
    
    }

    &.highlight-background{
      background: var(--green);
      color: #FFF;
    }


     }




  }





`;