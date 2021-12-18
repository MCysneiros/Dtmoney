import styled from 'styled-components';
import { darken, transparentize } from 'polished';

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d',
};
export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;

export const TransactionTypeContainer = styled.div`
margin 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap :0.5rem;
`;

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border 1px solid #d7d7d7;
    background: #e7e9ee;
    font-size: 1rem;
    font-weight: 400;
    outline-color:var(--blue-light);
    
    &+input {
      margin-top: 1rem;
    }
    &::placeholder{ var(--text-body);

    }
  }
  





  button[type="submit"] {

    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    border-radius: 0.25rem;
    border: none;
    color: #fff;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;    
    transition:filter 0.2s;
    &:hover{
      filter: brightness(90%);
    }
  }

`;