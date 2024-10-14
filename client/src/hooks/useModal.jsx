import { useState, useRef } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const modalContentRef = useRef(null);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = (e) => {
    if (!modalContentRef.current?.contains(e.target)) setShowModal(false);
  };

  return [showModal, modalContent, openModal, closeModal, modalContentRef];
};

export default useModal;
