import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css';

function User() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    alert('Informations utilisateur sauvegardées:\n' + 
          `Email: ${email}\nAdresse: ${address}`);
  };

  const handleDelete = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
      alert('Compte supprimé.');
      // Here you would add logic to actually delete the user account
    }
  };

  const handleLogout = () => {
    alert('Déconnexion réussie.');
    // Here you would add logic to handle logout
    navigate('/login');
  };

  return (
    <div className="user-page">
      <h2>Gestion de l'utilisateur</h2>
      <form className="user-form" onSubmit={handleSave}>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Mot de passe:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <label>
          Adresse:
          <input 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </label>
        <div className="buttons">
          <button type="submit" className="save-button">Sauvegarder</button>
          <button type="button" className="delete-button" onClick={handleDelete}>Supprimer le compte</button>
          <button type="button" className="logout-button" onClick={handleLogout}>Déconnexion</button>
        </div>
      </form>
    </div>
  );
}

export default User;
