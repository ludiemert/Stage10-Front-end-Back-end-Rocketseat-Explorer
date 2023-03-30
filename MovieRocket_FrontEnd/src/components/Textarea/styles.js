import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;
  resize: none; //fixed box size
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 16px;
  
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  }

`;