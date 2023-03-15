import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  padding: 0 40px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #2d2e37;
  color: #fcfeff;
  border-bottom: 3px solid #0275d8;
  align-items: center;
  font-weight: 500;
  height: 70px;
  span {
    color: #0275d8;
  }
  .Logo:hover {
    transform: scale(1.1);
    transition: 0.3s;
    cursor: pointer;
  }
  .Links {
    display: flex;
    gap: 30px;
  }
`;
