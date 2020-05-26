import styled from 'styled-components';

export const Container = styled.div`
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

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;

    &::placeholder {
      color: #576574;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
