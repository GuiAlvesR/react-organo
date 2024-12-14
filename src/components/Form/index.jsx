import { useState } from "react";
import { toast } from "sonner";
import Button from "../Button";
import CampText from "../CampText";
import DropwdownList from "../DropdownList";
import "./Form.css";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState(props.times[0]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isCollaboratorExist = props.collaborators.some(
      (collaborator) => collaborator.name === nome
    );

    if (isCollaboratorExist) {
      toast.warning("Este colaborador já foi adicionado.", {
        style: {
          padding: "20px 20px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        },
      });
      return;
    }

    props.toRegisteredCollaborator({
      name: nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime(props.times[0]);

    toast.success("Colaborador criado com sucesso!", {
      style: {
        padding: "20px 20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      },
    });
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampText
          mandatory={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          onAlter={(value) => setNome(value)}
        />
        <CampText
          mandatory={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          onAlter={(value) => setCargo(value)}
        />
        <CampText
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          onAlter={(value) => setImagem(value)}
        />
        <DropwdownList
          mandatory={true}
          label="Time"
          itens={props.times}
          value={time}
          onAlter={(value) => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;