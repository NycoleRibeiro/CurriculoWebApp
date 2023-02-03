import { useState } from "react";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
              onChange={e => setEmail(e.target.value)} />
              <span className="focus-input" data-placeholder="Email" />
            </div>

            <div className="wrap-input">
              <input 
                className={password !== "" ? "input has-val" : "input"}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}/>
              <span className="focus-input" data-placeholder="Senha" />
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Entrar</button>
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
