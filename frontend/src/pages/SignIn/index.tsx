import React, { useCallback, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

import ModalForgotPassword from 'components/ModalForgotPassword';

import { useAuth } from 'hooks';
// import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  // User
  const { login } = useAuth();

  // Lógica do modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleLogin = useCallback(
    // Event type = HTMLFormControlsCollection ?
    async e => {
      e.preventDefault();
      let email = e.target[0].value
      let password = e.target[1].value
      console.log(email)
      console.log(password)
      try {
        await login({ email: email, password: password });
      } catch (error) {
        console.log(error);
      }
    },
    [login]
  );

  return (
    <>
      <ModalForgotPassword show={show} onClick={handleShow} setShow={setShow} />

      <Container className='p-5 m-5'>
        <header className='mb-5'>
          <h3>Faça login para continuar</h3>
        </header>

        <main>
          <Form onSubmit={handleLogin}>
            <Form.Group className='my-3' controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Digite seu email' />
            </Form.Group>

            <Form.Group className='my-3' controlId='formBasicPassword'>
              <Form.Label>Senha</Form.Label>
              <Form.Control type='password' placeholder='Password' />
              <Form.Text className='text-muted'>Sua senha contém no mínimo 6 caracteres</Form.Text>
            </Form.Group>
            {/* <Form.Group controlId='formBasicCheckbox'>
              <Form.Check className='mx-2' type='checkbox' label='Mantenha-me logado' />
            </Form.Group> */}
            <Form.Group className='my-5'>
              <Button className='mb-4 btn btn-yellow btn-lg btn-block' variant='primary' type='submit'>
                Enviar
              </Button>
              <Button className='mt-4 btn btn-dark' variant='primary' onClick={handleShow}>
                Esqueceu sua senha?
              </Button>
            </Form.Group>
          </Form>
          {/* <form onSubmit={handleLogin}>
            <div className='form-group'>
              <label>Email</label>
              <input type='email' className='form-control' placeholder='Digite seu email' />
            </div>

            <div className='form-group mb-5'>
              <label>Senha</label>
              <input type='password' className='form-control' placeholder='Digite sua senha' />
            </div>

            <div className='form-group'>
              <div className='custom-control custom-checkbox'>
                <input type='checkbox' className='custom-control-input' id='customCheck1' />
                <label className='custom-control-label' htmlFor='customCheck1'>
                  Lembrar de mim
                </label>
              </div>
            </div>

            <button type='submit' className='btn btn-dark btn-lg btn-block'>
              Login
            </button>
            <p className='forgot-password text-right' className='mt-4'>
              <Button variant='primary' onClick={handleShow}>
                Esqueceu sua senha?
              </Button>
            </p>
          </form> */}
        </main>
      </Container>
    </>
  );
};

export default SignIn;
