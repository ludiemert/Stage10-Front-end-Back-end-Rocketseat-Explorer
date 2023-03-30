import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 136px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;

  }

  .tagss {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;


  }

  section h1 {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    margin-bottom: 24px;

  }

  `; 

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

.flex {
  display: flex;
  gap: 40px;
  margin-bottom: 3.2rem;

}


> header {
  display: flex;
  flex-direction: column;
  align-items: left;


   svg, button {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 18px;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      gap: 8px;
    } 

  color: ${({ theme }) => theme.COLORS.WHITE};
  gap: 24px;
  margin-bottom: 40px;

}



.books {
  display: flex;
  gap: 40px;
  margin-bottom: 3.2rem;

}

`;