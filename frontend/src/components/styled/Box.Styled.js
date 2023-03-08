import styled from "styled-components";

export const Box = styled.div`
border-radius: "0.75rem";
display: flex;
flex-direction: column;
gap: ${({gb})=>gb?gb:'10px'};
padding: "1.5rem 1.5rem 0.75rem 1.5rem";
box-shadow: 0px 0px 25px -8px rgba(0, 0, 0, 0.68);
width: 100%;

`