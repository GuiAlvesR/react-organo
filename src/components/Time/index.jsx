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
            value={props.corPrimary}
            type="color"
            className="input-cor"
          />
          <h3 style={border}>{props.name}</h3>

          <div className="collaborators">
            {props.collaborators.map((collaborator) => (
              <Collaborator
                id={collaborator.id}
                key={collaborator.id}
                name={collaborator.name}
                cargo={collaborator.cargo}
                imagem={collaborator.imagem}
                corPrimary={props.corPrimary}
                favorite={collaborator.favorite}
                onFavorite={props.onFavorite}
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
