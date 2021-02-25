import React from 'react';
import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// import { useAuth } from 'hooks';

const SignIn = () => {
  // const { signIn } = useAuth();
  return (
    <Container>
      <header>
        <h1>Faça login para continuar</h1>
      </header>

      <main>
        <form>
          <h3>Login</h3>

          <div className='form-group'>
            <label>Email</label>
            <input type='email' className='form-control' placeholder='Digite seu email' />
          </div>

          <div className='form-group'>
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
          <p className='forgot-password text-right'>
            Esqueceu a <a href='/'>senha?</a>
          </p>
        </form>
      </main>
    </Container>
  );
};

export default SignIn;
