import styled from 'styled-components';

export const ActionButton = styled.button`
  width: 80px;
  height: 30px;
  padding: 2px;
  margin-right: 20px;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;

  &:active {
    background-color: teal;
    color: #fff;
  }
`;

export const ActionsWraper = styled.div`
  padding: 20px;
`;
