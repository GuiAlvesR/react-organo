import Collaborator from "../Collaborator";
import hexToRgba from "hex-to-rgba";
import "./Time.css";

const Time = (props) => {
  const background = { backgroundColor: hexToRgba(props.corSecondary, 0.6) };
  const border = { borderColor: props.corPrimary };

  return (
    <>
      {props.collaborators.length > 0 ? (
        <section className="time" style={background}>
          <input
            onChange={(event) => props.alterCor(event.target.value, props.id)}
            value={props.cor}
            type="color"
            className="input-cor"
          />
          <h3 style={border}>{props.name}</h3>

          <div className="collaborators">
            {props.collaborators.map((collaborator) => (
              <Collaborator
                key={collaborator.name}
                name={collaborator.name}
                cargo={collaborator.cargo}
                imagem={collaborator.imagem}
                corPrimary={props.corPrimary}
                onDelete={props.onDelete}
              />
            ))}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Time;
