import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const Container = styled.div`
  color: rgb(217, 58, 86);
  padding: 10px 0;
  font-size: 13px;

  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
export const Error = styled(ErrorMessage)`
  display: flex;
  align-items: center;
`;
