import { ModalBg, Container } from "./style";

type ModalPropsType = {
  isOpen: boolean;
  handleOpenModal: () => void;
  handleExecute: () => void;
};

function Modal({ isOpen, handleOpenModal, handleExecute }: ModalPropsType) {
  const display = isOpen ? { display: "flex" } : { display: "none" };

  const handleChangeModalState = () => handleOpenModal();

  return (
    <ModalBg style={display} onClick={handleChangeModalState}>
      <Container
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={display}
      >
        <div className="text">
          Sua compra foi finalizada com sucesso! Obrigado pela realização do
          teste, para qualquer feedback entre em contato com o{" "}
          <a
            href="https://www.linkedin.com/in/gabriel-marques-magalhaes/"
            target="_blank"
          >
            Criador
          </a>
        </div>
        <div className="buttons">
          <button onClick={handleChangeModalState} className="back">
            Voltar
          </button>
          <button className="reset" onClick={handleExecute}>
            Reset
          </button>
        </div>
      </Container>
    </ModalBg>
  );
}
export default Modal;
