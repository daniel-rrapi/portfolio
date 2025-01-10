import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./Projects.module.scss";

// Firebase Config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Title = styled.p`
  color: var(--lightest-slate);
`;
const Descr = styled.div`
  background-color: var(--light-navy);
  padding: 25px 10px;
  text-align: center;
  border-radius: 10px;
`;
const Tecnologies = styled.div`
  display: flex;
  font-family: "Fira Code", monocode;
  justify-content: space-around;
  font-size: 0.8rem;
  margin-top: 1rem;
`;
const Img = styled.img`
  overflow: hidden;
  max-width: 100%;
`;

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsList);
    };

    fetchProjects();
  }, []);
  return (
    <section id="projects" className="container">
      <h4 className="sectionHeader">Projects</h4>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`row mt-5 row-cols-1 row-cols-lg-2 row-gap-5 ${
            index % 2 === 0 ? "" : "flex-row-reverse"
          }`}
        >
          <div className=" justify-content-start">
            <Img src={project.image_url} alt="" className="rounded" />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <Title
              className={`h5 fw-bold ${index % 2 === 0 ? "" : "text-end"}`}
            >
              {project.name}
            </Title>
            <Descr>{project.description}</Descr>
            <Tecnologies>
              {project.tecnologies.map((tecnology) => (
                <p key={tecnology}>{tecnology}</p>
              ))}
            </Tecnologies>
            <div
              className={`${
                index % 2 === 0 ? "" : "d-flex justify-content-end"
              }`}
            >
              {project.github_url !== "#" && (
                <a href={project.github_url} className="me-3" target="_blank">
                  <svg
                    className={styles.links}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                  </svg>
                </a>
              )}
              {project.preview_url !== "#" && (
                <a href={project.preview_url} target="_blank">
                  <svg
                    className={styles.links}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"></path>
                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
      <a
        className="d-block text-center mt-5"
        href="https://github.com/daniel-rrapi?tab=repositories"
      >
        Check out all my projects!
      </a>
    </section>
  );
}
