import { TextField, Button, FormHelperText,Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { authRequests } from '../../../../commom/api/auth.requests'

export const RegisterForm = () => {

  const [curso, setCurso] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [user, setUser] = useState<string>('')

  const [error, setError] = useState<string>();
  const [disable, setDisable] = useState<boolean>();

  const navigate = useNavigate();

  const save = async (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    setDisable(true)
    try{
      const data = await authRequests.register({curso, name, password, user})
      console.log(data)
      navigate('/')
    }catch{
      setError('Erro ao cadastrar')
    }finally{
      setDisable(false)
    }
  }

    return (
        <form 
        style={{ 
          padding: '2rem', 
          borderRadius: '1rem',
          width: '50%',
          backgroundColor: '#fff'
        }} 
        onSubmit = {save}
        noValidate>  

          <TextField
            error={false}
            fullWidth
            margin="normal"
            autoFocus
            helperText=""
            label="Nome"
            name="name"
            type="text"
            variant="outlined"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />
          
          <TextField
            error={false}
            margin="normal"
            fullWidth
            autoFocus
            helperText=""
            label="Curso"
            name="curso"
            type="text"
            variant="outlined"
            value={curso}
            onChange={(e) => {setCurso(e.target.value)}}
          />
          <TextField
            error={false}
            fullWidth
            margin="normal"
            autoFocus
            helperText=""
            label="Usuário (Para login)"
            name="user"
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
    
          {error && <FormHelperText error>{error}</FormHelperText>}
    
          <Button
            sx={{ mt: 3 }}
            color="primary"
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            disabled={disable}
          >
            Cadastre-se
          </Button>
          <Typography 
          sx={{ mb: 1, width: '100%', textAlign: 'center' }}
          color="text.secondary"
          >
            Ja tem uma conta? <a href="/">Clique aqui</a>
          </Typography>
      </form>
    )
}