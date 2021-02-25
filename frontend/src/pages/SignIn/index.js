import React, { useCallback, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

import ModalForgotPassword from 'components/ModalForgotPassword';

import api from 'api/api';

import { useAuth } from 'hooks';
// import { Link } from 'react-router-dom';

const SignIn = () => {
  // User
  const { signIn } = useAuth();

  // Lógica do modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleLogin = useCallback(async (data) => {
    await signIn({ email: data.email, password: data.password });
  }, [signIn]);

  return (
    <>
      <ModalForgotPassword show={show} onClick={handleShow} setShow={setShow} />

      <Container className='p-5 m-5'>
        <header className='mb-5'>
          <h3>Faça login para continuar</h3>
        </header>

        <main>
          <form>
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

            <button type='submit' className='btn btn-dark btn-lg btn-block' onSubmit={handleLogin}>
              Login
            </button>
            <p className='forgot-password text-right' className='mt-4'>
              <Button variant='primary' onClick={handleShow}>
                Esqueceu sua senha?
              </Button>
            </p>
          </form>
        </main>
      </Container>
    </>
  );
};

export default SignIn;
