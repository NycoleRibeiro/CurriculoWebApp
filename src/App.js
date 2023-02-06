import { useState } from "react";

import {validEmail, validPassword} from './utils/regex';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = () => {
    if(validEmail.test(email) === false) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  const validatePassword = () => {
    if(validPassword.test(password) === false) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    
  }
  
  const handleLogin = () => {
    if(emailError === false && passwordError === false) {
      console.log("Logado com sucesso!")
    }
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Currículo Web</span>

            <div className="wrap-input">
              <input 
              className={email !== "" ? "input has-val" : "input"}
              type="email"
              value={email}
              label="Email"
              onChange={e => setEmail(e.target.value)}
              onBlur={validateEmail}
              />
              <span className="focus-input" data-placeholder="Email" />
            </div>
            {emailError && <p className="error">Por favor, digite um email válido.</p>}

            <div className="wrap-input">
              <input 
              className={password !== "" ? "input has-val" : "input"}
              type="password"
              value={password}
              label="Senha"
              onChange={e => setPassword(e.target.value)}
              onBlur={validatePassword}
              />
              <span className="focus-input" data-placeholder="Senha" />
            </div>
            {passwordError && <p className="error">Sua senha deve conter pelo menos 6 dígitos, uma letra e um número.</p>}

            <div className="container-login-form-btn">
              <button 
              className="login-form-btn"
              type="button"
              disabled={email === "" || password === ""}
              onClick={handleLogin}
              >
                Entrar
              </button>
            </div>

            <div className="text-center">
              <span className="text1">Não possui conta?</span>
              <a className="text2" href="#">Criar conta.</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
