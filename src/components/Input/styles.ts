import styled, { css } from 'styled-components';

import Tooltip from '../ToolTip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;

}

export const Container = styled.div<ContainerProps>`
  background: #222f3e;
  border-radius: 10px;
  border: 2px solid #8395a7;
  padding: 16px;
  width: 100%;
  color: #576574;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}



  input {
    flex: 1;
    border: 0;
    background: none;
    color: #f4ede8;

    &::placeholder {
      color: #576574;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 17px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }


`
