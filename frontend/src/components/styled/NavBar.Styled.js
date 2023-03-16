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
  @media (max-width: 430px) {
    gap: 40px;
  }
  @media (max-width: 376px) {
    gap: 15px;
    font-size: 12px;
    padding: 0 5px !important;
  }
  @media (max-width: 321px) {
    gap: 10px;
    font-size: 10px;
    padding: 0 5px !important;
  }
`;
