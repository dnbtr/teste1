import React, { useCallback } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalForgotPassword = ({ show, setShow }) => {
  const handleClose = useCallback(() => {
    setShow(state => !state);
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Não tenho nada a ver com isso...</Modal.Title>
        </Modal.Header>
        <Modal.Body>O sistema de recuperação de senha um dia será implementado...</Modal.Body>
        <Modal.Footer >
          <Button variant='secondary' onClick={handleClose}>
            Ok...
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForgotPassword;
