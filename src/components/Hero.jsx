import styled from "styled-components";

const StyledContainer = styled.section`
  max-width: 1000px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FirstP = styled.p`
  color: var(--green);
  font-family: "Fira Code", monospace;
`;
const H1 = styled.h1`
  color: var(--lightest-slate);
  font-size: 60px;
  font-weight: 600;
`;
// const H3 = styled.h3`
//   font-size: 60px;
// `;
const P = styled.p`
  max-width: 500px;
`;

export default function Hero() {
  return (
    <StyledContainer className="container">
      <FirstP>Hi my name is</FirstP>
      <H1>Daniel Rrapi</H1>
      {/* <H3>I build things for the web</H3> */}
      <P>
        Im a Full Stack Developer, I love coding and im impoving myself every
        day pushed by a huge curiosity.
      </P>
    </StyledContainer>
  );
}
