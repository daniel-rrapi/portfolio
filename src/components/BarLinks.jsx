import styled from "styled-components";
import githubLogo from "/svgs/github-logo.svg";
import linkedinLogo from "/svgs/linkedin-logo.svg";

const Wrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 25px;
  &::after {
    content: "";
    width: 0;
    height: 26vh;
    border: 1px solid var(--lightest-navy);
    display: block;
    transform: translate(10px);
  }
`;

const Svg = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  gap: 20px;
  transition: 0.5s;
  &:hover {
    transform: translate(0, -5px);
    transition: 0.5s;
  }
`;

export default function BarLinks() {
  return (
    <Wrapper className="d-none d-xxl-flex flex-column row-gap-4">
      <a href="https://github.com/daniel-rrapi" target="_blank">
        <Svg src={githubLogo} alt="github logo" />
      </a>
      <a href={linkedinLogo} target="_blank">
        <Svg src="/svgs/linkedin-logo.svg" alt="linkedin logo" />
      </a>
    </Wrapper>
  );
}
