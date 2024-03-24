import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
