import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const FullPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainGrow = styled.main`
  flex-grow: 1;
`;

export const H2 = styled.h2`
  min-height: 3.6rem;
  font-size: 1.8rem;
  line-height: 1;
  text-align: center;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;