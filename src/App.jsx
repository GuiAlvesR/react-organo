import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Time from "./components/Time";
import Footer from "./components/Footer";

function App() {
  const times = [
    {
      name: "Programação",
      corPrimary: "#57c278",
      corSecundary: "#d9f7e9",
    },
    {
      name: "FrontEnd",
      corPrimary: "#82cffa",
      corSecundary: "#e8f8ff",
    },
    {
      name: "Data Science",
      corPrimary: "#a6d157",
      corSecundary: "#f0f8e2",
    },
    {
      name: "DevOps",
      corPrimary: "#e06b69",
      corSecundary: "#fde7e8",
    },
    {
      name: "Ux e Design",
      corPrimary: "#db6ebf",
      corSecundary: "#fae9f5",
    },
    {
      name: "Inovação e Gestão",
      corPrimary: "#ffba05",
      corSecundary: "#fff5d9",
    },
    {
      name: "Mobile",
      corPrimary: "#ff8a29",
      corSecundary: "#ffeedf",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const onNewAddCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function deleteCollaborator() {
    console.log("deletar");
  }

  return (
    <>
      <Banner />
      <Form
        times={times.map((time) => time.name)}
        toRegisteredCollaborator={onNewAddCollaborator}
        collaborators={collaborators}
      />

      {times.map((time) => (
        <Time
          key={time.name}
          name={time.name}
          corPrimary={time.corPrimary}
          corSecundary={time.corSecundary}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.time === time.name
          )}
          onDelete={deleteCollaborator}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
