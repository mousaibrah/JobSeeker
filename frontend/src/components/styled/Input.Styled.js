import styled from "styled-components";

export const Input = styled.input`
  max-width: ${(props=>props.mx?props.mx:'240px')};
  width: 100%;
  color: #1e1e2a;
  display: flex;
  align-items: center;
  column-gap: 12px;
  padding: 8px 15px;
  background:#fcfeff ;
  font-weight: 500;
  border-radius: 64px;
  margin-right: 32px;
`;
