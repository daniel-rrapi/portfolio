import styled from "styled-components";

const Span = styled.span`
  color: var(--green);
  font-family: "Fira Code", monospace;
`;

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg position-fixed top-0">
      <div className="container-fluid justify-content-between">
        <a className="navbar-brand" href="#">
          daniel_rrapi.dev
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">
              <Span>01.</Span>Home
            </a>
            <a className="nav-link" href="#">
              <Span>02.</Span>About me
            </a>
            <a className="nav-link" href="#">
              <Span>03.</Span>Projects
            </a>
            <a className="nav-link" href="#">
              <Span>04.</Span>Contacts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
