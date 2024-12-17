import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Time from "./components/Time";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      cor: "#57c278",
    },
    {
      id: uuidv4(),
      name: "FrontEnd",
      cor: "#82cffa",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      cor: "#a6d157",
    },
    {
      id: uuidv4(),
      name: "DevOps",
      cor: "#e06b69",
    },
    {
      id: uuidv4(),
      name: "Ux e Design",
      cor: "#db6ebf",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      cor: "#ffba05",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      cor: "#ff8a29",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const onNewAddCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function deleteCollaborator() {
    console.log("deletar");
  }

  function alterCorInTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
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
          alterCor={alterCorInTime}
          key={time.name}
          name={time.name}
          id={time.id}
          corPrimary={time.cor}
          corSecondary={time.cor}
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
