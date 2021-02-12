import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  margin-top: 15px;
  min-height: 100px;
  border-radius: 10px;
  padding: 30px;
  border: 1px solid
    ${({ error }) => (error ? 'rgba(217, 48, 37)' : 'rgb(218, 220, 224)')};
  h1 {
    font-weight: 350;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 15px;
    line-height: 22px;
  }
  label {
    font-size: 15px;
    font-weight: 500;
  }
  input[type='text'],
  input[type='email'] {
    display: block;
    margin-top: 40px;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: ${({ error }) =>
      error ? 'rgba(217, 48, 37)' : 'rgb(240, 235, 248)'};
    padding: 5px 0;
    outline: 0;
    font-size: 14px;
    width: 100%;
    max-width: 300px;
    border-radius: 0;
    outline-width: 0 0 5px 0;
  }
  input:focus {
    border-color: ${({ error }) =>
      error ? 'rgba(217, 48, 37)' : ' rgba(103, 58, 183)'};
    border-width: 0 0 2px 0;
  }
`;
