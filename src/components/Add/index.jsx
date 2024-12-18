import "./Add.css";

const Add = () => {
  function formHidden() {
    const form = document.querySelector(".form");
    form.classList.toggle("hidden");
  }

  return (
    <div className="section-add">
      <div className="content">
        <h1 className="title">Minha Organização:</h1>
      </div>
      <img
        className="icon"
        src="./imagens/add.png"
        alt="Ícone de organização"
        onClick={formHidden}
      />
    </div>
  );
};

export default Add;
