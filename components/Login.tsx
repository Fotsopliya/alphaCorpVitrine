'use client'

import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
 
const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<string | null>(null);

  const router = useRouter();

  const validate = () => {
    let valid = true;

    if (!username) {
      setErrors('Le nom d\'utilisateur est requis')
      valid = false;
    }

    if (!password || password.length < 8) {
      setErrors("Le mot de passe doit contenir au moins 8 caractères");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        console.log('Form submitted:', { username, password });
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ username, password })
        });

        const data = await response.json()

        if (response.ok){
          router.push('/admin/blog');
        }else{
          setErrors(data.message || 'Désolé une érreur s\'est produite')
        }
      } catch (error) {
        setErrors("Une erreur s'est produite lors de la connexion");
      }
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Connexion
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nom d'utilisateur"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!errors}
          helperText={errors}
        />
        <TextField
          label="Mot de passe"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors}
          helperText={errors}
        />
        <Button type="submit" variant="contained" style={{ backgroundColor: 'blue' }} fullWidth>
          Se connecter
        </Button>
      </form>
    </Box>
  );
};

export default Login;
