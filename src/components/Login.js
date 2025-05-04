import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Add actual login logic here
    navigate('/home');
  };

  const handleGuestLogin = () => {
    
    // Add guest login logic here
    navigate('/home');
  };

  return (
    <div className="login-page">
      <h2>Connexion</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          <input 
            placeholder="Email"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          <input 
            placeholder="Mot de passe"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <button type="submit" className="login-button">Se connecter</button>
      </form>
      <button className="guest-button" onClick={handleGuestLogin}>Se connecter en tant qu'invité</button>
    </div>
  );
}

export default Login;
