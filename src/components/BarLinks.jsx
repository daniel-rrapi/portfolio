import styled from "styled-components";

const Wrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 50px;
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
        <Svg src="src/assets/svgs/github-logo.svg" alt="github logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-rrapi-full-stack-developer"
        target="_blank"
      >
        <Svg src="src/assets/svgs/linkedin-logo.svg" alt="linkedin logo" />
      </a>
    </Wrapper>
  );
}
