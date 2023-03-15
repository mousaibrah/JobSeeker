import styled from "styled-components";

export const Box = styled.div`
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: ${({ gb }) => (gb ? gb : "0px")};
  padding: 0.5rem 0.5rem 0.75rem 0.5rem;
  background-color: #2d2e37;

  box-shadow: 0px -1px 25px -8px rgba(0, 0, 0, 0.68);
  width: 100%;
`;
