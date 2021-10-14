import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  background-color: transparent;
  border-radius: 6px;
  border: 2px solid #006d77;
`;

export const Button = () => {
  return <StyledButton>Click Me</StyledButton>;
};
