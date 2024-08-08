import styled from "styled-components";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  const Wrapper = styled.div`
    margin-top: 30vh;
  `;
  const H1 = styled.h1`
    font-weight: 700;
    color: var(--lightest-slate);
  `;
  const P = styled.p`
    max-width: 30rem;
    text-align: center;
  `;
  const Footer = styled.footer`
    font-family: "Fira Code";
    text-align: center;
    margin-top: 20vh;
    margin-bottom: 5vh;
  `;
  return (
    <>
      <Wrapper className="container d-flex flex-column align-items-center row-gap-4">
        <h4 className="sectionHeaderWithoutAfter">Contacts</h4>
        <H1>Get in touch</H1>
        <P>
          My inbox is always open. Whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </P>
        <a
          className="btn btn-outline-primary text-decoration-none"
          href="mailto:danielrrapi@proton.me"
        >
          Say Hello
        </a>
        <div className="d-flex d-xxl-none  gap-3">
          <a href="https://github.com/daniel-rrapi" target="_blank">
            <svg
              className={styles.links}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="#ccd6f6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/daniel-rrapi" target="_blank">
            <svg
              className={styles.links}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ccd6f6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </Wrapper>
      <Footer>Copyright © 2024. All rights are reserved</Footer>
    </>
  );
}
