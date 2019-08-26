import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #eee;
    border-radius: 4px;
    font-size: 16px;
    border-color: ${props => (props.error ? 'red' : '#eee')};
  }
`;

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 10px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 15px 0;

    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
