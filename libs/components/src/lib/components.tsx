import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ComponentsProps {}

const StyledComponents = styled.div`
  color: pink;
`;

export function Components(props: ComponentsProps) {
  return (
    <StyledComponents>
      <h1>Welcome to Components!</h1>
    </StyledComponents>
  );
}

export default Components;
