import React, { useContext } from "react";
import { Modal } from "semantic-ui-react";
import { RootContextStore } from "../../stores/rootStore";
import { observer } from "mobx-react-lite";

const ModalContainer = () => {
  const rootStore = useContext(RootContextStore);
  const {
    Modal: { open, body },
    CloseModal,
  } = rootStore.modalStore;
  return (
    <Modal open={open} onClose={CloseModal} size='mini'>
      <Modal.Content>{body}</Modal.Content>
    </Modal>
  );
};

export default observer(ModalContainer);
