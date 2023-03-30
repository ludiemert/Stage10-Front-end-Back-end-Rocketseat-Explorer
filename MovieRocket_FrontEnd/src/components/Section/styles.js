import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.section`
  
  margin: 28px 0;

  >h2 {
    padding: 16px;

    color: ${({ theme}) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 400;

  }
`;
