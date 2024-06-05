import React from "react";

interface IModal {
  header: string;
  children: React.ReactNode;
  close(): any;
}

const Modal = ({ children, close }: IModal) => {
  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "modal") {
      close();
      document.body.style.overflow = "";
    }
  };

  return (
    <div
      id={"modal"}
      className=""
      onClick={(e) => {
        closeModal(e);
      }}
    >
      <div className="modalData">{children}</div>
    </div>
  );
};

export default Modal;
