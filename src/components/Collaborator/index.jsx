import { IoIosCloseCircle, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import "./Collaborator.css";
import { toast } from "sonner";

const Collaborator = ({
  name,
  cargo,
  imagem,
  corPrimary,
  id,
  onDelete,
  favorite,
  onFavorite,
}) => {
  const background = { backgroundColor: corPrimary };

  function deleteColaborador() {
    onDelete(id);

    toast.success("Colaborador deletado com sucesso!", {
      style: {
        padding: "20px 20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      },
    });
  }

  function favoriter() {
    onFavorite(id);
  }

  const propsFavorite = {
    size: 24,
    onClick: favoriter,
  };

  return (
    <>
      <div className="collaborator">
        <IoIosCloseCircle
          size={24}
          className="delete"
          onClick={deleteColaborador}
        />
        <div className="header" style={background}>
          <img src={imagem} alt={name} />
        </div>
        <div className="footer">
          <h4>{name}</h4>
          <h5>{cargo}</h5>
          <div className="favorite">
            {favorite ? (
              <IoMdHeart size={24} color="red" {...propsFavorite} />
            ) : (
              <IoMdHeartEmpty size={24} {...propsFavorite} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collaborator;
