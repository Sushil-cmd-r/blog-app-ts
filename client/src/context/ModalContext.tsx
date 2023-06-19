import { ReactNode, createContext, useState } from "react";

const useModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const open = () => setOpenModal(true);
  const close = () => setOpenModal(false);

  return {
    openModal, open, close
  }
}

const initialState = {
  openModal: false,
  open: () => { },
  close: () => { }
}

type ModalContextType = ReturnType<typeof useModal>

export const ModalContext = createContext<ModalContextType>(initialState);

type PropsType = {
  children: ReactNode | ReactNode[]
}

const ModalProvider = ({ children }: PropsType) => {
  return (
    <ModalContext.Provider value={useModal()}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider