import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"

const useModal = () => {
  const { openModal, open, close } = useContext(ModalContext);

  return {
    isModalOpen: openModal,
    openModal: open,
    closeModal: close,

  }
}

export default useModal;