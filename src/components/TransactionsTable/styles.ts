import styled from "styled-components";

export const Container = styled.div`




table{
  width: 100%;
  border-spacing: 0.5rem;

  th{
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td{
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;

    &:first-child{
      color: var(--text-title);
    }

    &.deposit{
      color: var(--green);
    }
    &.withdraw{
      color: var(--red);
    }



  }
   td:nth-child(2){
     text-align: right;
   }
   th:nth-child(2){
     text-align: right;
   }
}
`;

export const Perfil = styled.div`

.profile-card,.profile-card .img-area,.social-icons a,.buttons button{background:#ecf0f3;box-shadow:-3px -3px 7px #ffffff,3px 3px 5px #ceced1}

.profile-card{
  position:relative;
  width:230px;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  top: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  }


.profile-card .img-area{
  height:150px;
  width:150px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  top: 1rem;
  bottom: 1rem;
  }

.img-area .inner-area{height:calc(100% - 25px);width:calc(100% - 25px);border-radius:50%;   top: 10rem;}

.inner-area img{height:100%;width:100%;border-radius:50%;object-fit:cover;   top: 10rem;}

.profile-card .name{font-size:1rem;font-weight:500;color:#31344b;margin:10px 0 5px 0}

.profile-card .about{color:#44476a;font-weight:400;font-size:0.8rem}




`;

export const Hero = styled.section`
  /* Photo by mnm.all on Unsplash */
  background-size: cover;
  padding: 4rem 2rem;
  /* Grid styles */
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap: 2rem; /* Espaçamento */


  p{
    text-align: center;
  }


`;
export const Breweries = styled.section`

padding: 2rem;
 ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;

}

 ul > li {
  border: 1px solid #E2E2E2;
  border-radius: .5rem;
  list-style-type: none;
}

ul > li > figure {
  max-height: 150px;
  overflow: hidden;
  border-radius: .55rem;
  position: relative;
}
 ul > li > figure > img {
  width: 100%;
  opacity: .3;
}

 ul > li > figure > figcaption {
  position: absolute;
  bottom: 0;
  background-color: rgba(0,0,0,.7);
  width: 100%;
}

 ul > li > figure > figcaption > h3 {
  color: white;
  padding: .75rem;
  font-size: 1.25rem;
}

 ul > li > p {
  font-size: 1rem;
  line-height: 1.5;
  padding: 1rem .75rem;
  color: #666666;
}

 ul > li > a {
  padding: .5rem 1rem;
  margin: .5rem;
}`;



