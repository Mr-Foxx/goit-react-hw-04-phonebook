import { Form, Field } from 'formik';
import styled from '@emotion/styled';


export const FormContact = styled(Form)`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: color: rgb(123, 123, 123);;
`;

export const Input = styled(Field)`
  margin-bottom: 16px;
  border: 0.5px solid rgb(216, 214, 214);
  border-radius: 4px;
  height: 20px;
`;


export const Button = styled.button`
    
  color: white;
  background-color: rgb(69 86 98 / 97%);
  height: 30px;
  border: 0.5px solid rgb(216, 214, 214);
  border-radius: 4px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    background-color: #306097;

  }
`;
