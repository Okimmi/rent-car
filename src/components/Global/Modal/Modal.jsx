import { useEffect } from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import {
  CloseButton,
  Container,
  ModalStyled,
  Overlay,
  Title,
} from "./Modal.styled";
import { ReactComponent as Close } from "../../../icons/x.svg";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ close, children, title }) => {
  useEffect(() => {
    const closeModalEsc = ({ code }) => {
      if (code === "Escape") {
        close();
      }
    };
    document.addEventListener("keydown", closeModalEsc);
    disableBodyScroll(document.body);

    return () => {
      document.removeEventListener("keydown", closeModalEsc);
      enableBodyScroll(document.body);
    };
  }, [close]);

  const closeModal = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalStyled>
        <Container>
          <Title>{title}</Title>
          <CloseButton onClick={close}>
            <Close />
          </CloseButton>
        </Container>
        {children}
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
