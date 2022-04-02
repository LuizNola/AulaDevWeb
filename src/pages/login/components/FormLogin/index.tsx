import { TextField, Button, FormHelperText,Typography, Alert } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { LoginResponse } from '../../../../commom/types/user_types';
import { apiClient } from "../../../../services/api";
import { doLogin } from '../../../../services/authHandler';

export const FormLogin = () => {

  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [error, setError] = useState<string>();
  const [disable, setDisable] = useState<boolean>();

  const navigate = useNavigate();

  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setDisable(true)
    try {
      const data: LoginResponse = await apiClient.post('login', {user, password})
      console.log(data)
      doLogin(data.token, data.id, data.name, data.curso)
      return navigate("/posts")
    }catch(e){
      console.log(e)
      setError('Erro Ao logar')
    }
    finally{
      setDisable(false)
    }
    
  }

    return (
        <form style={{
        padding: '2rem', 
        borderRadius: '1rem',
        backgroundColor: '#fff'
        }}
        noValidate
        onSubmit={login}
        >
          {error && <Alert severity="error">{error}</Alert>}
  
        <TextField
          error={false}
          fullWidth
          margin="normal"
          autoFocus
          helperText=""
          label="Usuário"
          name="email"
          type="email"
          variant="outlined"
          value={user}
          onChange={(e) => {setUser(e.target.value)}}
        />
        <TextField
          error={false}
          fullWidth
          margin="normal"
          helperText=""
          label="Senha"
          name="password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />
  
        {alert && <FormHelperText error>{alert}</FormHelperText>}
  
        <Button
          sx={{ mt: 3 }}
          color="primary"
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          disabled={disable}
        >
          Login
        </Button>
        <Typography 
        sx={{ mb: 1, width: '100%', textAlign: 'center' }}
        color="text.secondary"
        >
          Ou <a href="/cadastro">Cadastre-se</a>
        </Typography>
      </form>
    )
}