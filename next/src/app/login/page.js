'use client'

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Modal } from '../../components/modal';
import { AUTHENTICATED, useAuth } from '../../hooks/use-auth';
import { Loader } from '../../components/loader';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../services/firebase'
import { LoginWithGoogle } from '@/components/login-with-google';

export default function LoginPage () {
  const { userState, login } = useAuth();

  const router = useRouter();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(userState === AUTHENTICATED) {
      router.replace('/home');
    }
  }, [ userState ])

  const loginWithGoogle = async (event) => {
    event.preventDefault()

    setLoading(true);
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      login('google');
      router.replace('/home');
    } catch(error) {
      console.error(error)
      setError(
        'Hubo un error con el usuario o la contraseña, por favor verificalos e intenta de nuevo'
      );
    } finally {
      setLoading(false);
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);
    try {
      if (
        usernameRef.current.value === 'admin' &&
        passwordRef.current.value === '270793'
      ) {
        login(usernameRef.current.value);
        router.replace('/home');
      } else {
        setError(
          'Hubo un error con el usuario o la contraseña, por favor verificalos e intenta de nuevo'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  if([AUTHENTICATED].includes(userState)) {
    return (
      <div className="w3-display-container" style={{ height: '100vh' }}>
        <div className="w3-display-middle">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <Modal>
      <div className="w3-center">
        <br />
        <Image
          src="/logo.jpeg"
          alt="Avatar"
          width={100}
          height={100}
          className="w3-circle w3-margin-top"
        />
      </div>
      <form onSubmit={onSubmit} className="w3-container">
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          autoComplete="username"
          disabled={loading}
          ref={usernameRef}
          id="username"
          className="w3-input w3-border w3-margin-bottom"
          type="text"
          placeholder="Usuario"
          name="username"
          required
        />
        <label htmlFor="password">
          <b>Contraseña</b>
        </label>
        <input
          autoComplete="current-password"
          disabled={loading}
          ref={passwordRef}
          id="password"
          className="w3-input w3-border w3-margin-bottom"
          type="password"
          placeholder="Contraseña"
          name="password"
          required
        />
        <button
          disabled={loading}
          className="w3-button w3-block w3-green w3-section w3-padding"
          type="submit"
        >
          {loading && '...'}
          {!loading && 'Entrar'}
        </button>
        <LoginWithGoogle
          disabled={loading}
          onClick={loginWithGoogle}
          type="submit"
        >
          {loading && '...'}
          {!loading && 'Login con Google'}
        </LoginWithGoogle>
        <br/>
      </form>
      {error && (
        <Modal color="w3-red" onClose={() => setError(null)} closable={true}>
          <div className="w3-container">
            <h3 className="w3-center">Error iniciando sesión</h3>
            <div className="w3-center">{error}</div>
            <br />
          </div>
        </Modal>
      )}
    </Modal>
  );
};
