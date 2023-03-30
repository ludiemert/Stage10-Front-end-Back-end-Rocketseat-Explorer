import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
 grid-area: header;
  width: 100%;
  height: 105px;

  left: 348px;
  top: -711px;
  border-radius: 0px;
  padding: 24px 123px 24px 123px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  

  .container {
  display: flex;
  gap: 64px;

  margin: 0 auto;

  input {
    padding: 19px 24px;
    flex: 1;
    border-radius: 1px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      }
      
    }

    span {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 18px;
      font-weight: 700;
    }

    
  }
`;


  export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  
  > div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 22px;
      font-weight: 700;
      line-height: 24px;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: ${({ theme }) => theme.COLORS.WHITE};
      
    }
  }

  > img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
  }
`;

export const Logout = styled.button`
  border: none;
  font-size: 18px;
  background: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  align-self: flex-end;
  font-weight: 700;

  > svg {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    margin-top: 10px;

  }
`;