import styled from 'styled-components';

import {Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 135.98px 128px auto 64px;
  grid-template-areas: 
    "header header"
    "menu content"
    "links content";  

   > main {
      grid-area: content;
      overflow-y: auto;
      padding: 64px 0;
  } 

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
  `;

  export const Menu  = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
  border-radius: 16px;
  padding: 32px;

  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  
  text-align: center;

  > li{
  color: ${({ theme }) => theme.COLORS.WHITE};       
  }
  
`;

  export const Search  = styled.div`
  grid-area: search;
  font-weight: bold;
  padding: 64px 64px 0;

  `;

 export const Brand  = styled.div`
    grid-area: brand;
    
    display: flex;
    justify-content: center;
    align-items: center;
   
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
   
   
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.PINK};

 `; 

  export const links = styled.ul`
  list-style: none;

> li {
  margin-top: 12px;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
}

 > content h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
    padding-top: 52px;  

   }

`;

  export const ButtonText  = styled(Link)`
    button {
    align-self: end;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-top: 20px;
  }   
  `;
    

 export const Content  = styled.div`
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    max-width: 900px;
    margin: 0 auto;
 
   .add {
      display: flex;
      justify-content: flex-end;
      justify-content: space-between;

      gap: 134px;

      margin: 0 auto;
   }

  .show_movie {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
      border-radius: 16px;

      padding: 32px;
   
    > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    font-weight: 700;
    padding-bottom: 10px;  
  
  } 

    section  {
    display: flex;
    flex-direction: row;
    gap: 10px;
  
  }

   > p {
      font-size: 18px;
      font-weight: 400;
      margin-top: 6px;
      text-align: justify;
      
      color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      margin-bottom: 20px;

   } 
   }
`;

 export const Links = styled(Link)`
    grid-area: Links;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      border: none;
      font-weight: bold;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 8px;

      width: 207px;
      height: 48px;

    svg {
      margin-right: 8px;
    }
       
 `;

export const Returnn = styled(Link)`

    grid-area: Links;

     color: ${({ theme }) => theme.COLORS.PINK};

      border: none;
      font-weight: bold;
      display: flex;

      width: 207px;
      height: 48px;
       
 `;



