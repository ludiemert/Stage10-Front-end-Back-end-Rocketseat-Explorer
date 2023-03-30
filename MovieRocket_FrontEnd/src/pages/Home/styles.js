import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas: 
  "header"
  "content";  
  
  > main {
      grid-area: content;
      overflow-y: auto;
      padding: 64px 0;
  }
`;

export const Links = styled.ul`
  list-style: none;
`;

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;


  > img {
    width: 84px;
    height: 16px;
    margin-top: 10px;
    margin-bottom: 8px;
  }

  
  > button {
    align-self: end;
  }  

  > h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    font-weight: 700;
    padding-top: 52px;    
  }

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    font-weight: 700;
    padding-top: 52px;    
  }

  > h1, h2 {
    padding-top: 20px;
   }

  > p {
    font-size: 18px;
    font-weight: 400;
    margin-top: 16px;
    text-align: justify;
    
    color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  }
`;