import styled, { createGlobalStyle } from "styled-components";
import Hero from "./sections/Hero";
import Catalog from "./sections/Catalog";
import Pop from "./sections/Pop";
import { useState } from "react";



const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  a, a:link, a:visited {
      text-decoration: none ;
      color: inherit ;
      cursor: pointer !important;
  }
 
html {
  scrollbar-width: none;
  scroll-behavior:smooth;
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  display: none;

}
body{
    position:relative ;
    background: #121212;
    color: #fff ;
    font-family: Kanit;
}

`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    grid-template-rows: 40vh auto;
    grid-row-gap: 4rem;
  }
  @media (max-width: 490px) {
    grid-template-rows: 50vh auto;
  }
`;

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      {open && <Pop closePop={setOpen} />}
      <Main>
        <Hero openIt={setOpen} />
        <Catalog />
      </Main>
    </>
  );
}

export default App;
