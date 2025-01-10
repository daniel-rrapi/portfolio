import styled from "styled-components";

const P = styled.p`
  max-width: 950px;
`;

export default function About() {
  return (
    <section id="about" className="container">
      <h4 className="sectionHeader">About me</h4>
      <P className="mt-4">
        HI! Im Daniel and welcome to my portfolio. I started coding industrial
        machines at school with the KOP language and a C/C++ based language for
        micro-controllers. Then I started learning web languages, my current
        stack is: Angular and Java/Spring. Checkout my latest projects below
      </P>
    </section>
  );
}
