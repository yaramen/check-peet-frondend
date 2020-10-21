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
  min-height: 2.8rem;
  max-height: 2.8rem;
  overflow: hidden;
  font-size: 1.4rem;
  line-height: 1;
  text-align: center;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  max-width: 230px;
  margin: 5px;
  padding: 20px;
  background: #f1f1f1;
`;

export const FloatLeft = styled.div`
  float: left;
  margin-right: 10px;
`;