import { IoIosCloseCircle } from "react-icons/io";
import "./Collaborator.css";

const Collaborator = ({ name, cargo, imagem, corPrimary, onDelete }) => {
  const background = { backgroundColor: corPrimary };

  return (
    <>
      <div className="collaborator">
        <IoIosCloseCircle size={24} className="delete" onClick={onDelete} />
        <div className="header" style={background}>
          <img src={imagem} alt={name} />
        </div>
        <div className="footer">
          <h4>{name}</h4>
          <h5>{cargo}</h5>
        </div>
      </div>
    </>
  );
};

export default Collaborator;
