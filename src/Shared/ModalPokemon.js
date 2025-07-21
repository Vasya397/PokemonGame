import ReactDOM from "react-dom";
import styled from "./ModalPokemon.module.css";

export const ModalPokemon = ({ active, setActive, children }) => {
  if (!active) return null;

  return ReactDOM.createPortal(
    <div className={styled.modal} onClick={() => setActive(!active)}>
      <div className={styled.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};
