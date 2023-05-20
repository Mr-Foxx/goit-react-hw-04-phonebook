import styled from '@emotion/styled'

export const ContactList = styled.ul`
  margin: 10px 0 10px 0;
  padding: 0;
`;

export const ItemsContact = styled.li`
  display: flex;

  justify-content: space-between;

  align-items: center;
  margin-bottom: 8px;
  font-family: Menlo, monospace;

`;

export const DeleteBtn = styled.button`

  color: white;
  background-color: rgb(69 86 98 / 97%);
  margin-left: 15px;
  border: 0.5px solid rgb(216, 214, 214);
  border-radius: 4px;
  height: 25px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    background-color: #306097;

  }
`;