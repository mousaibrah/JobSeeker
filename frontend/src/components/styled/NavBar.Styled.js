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
  width: 100%;
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
  @media (max-width: 768px) {
    height: 55px;
  }
  @media (max-width: 590px) {
    font-size: 0.8rem;
    height: 50px;
  }
  @media (max-width: 425px) {
    position: fixed;
    bottom: 0;
    border-bottom: none;
    border-top: 1px solid #0275d8;
    justify-content: center;
    gap: 40px;
  }
`;
