import { TextField, Button, FormHelperText,Typography } from '@mui/material'

export const RegisterForm = () => {
    return (
        <form 
        style={{ 
          padding: '2rem', 
          borderRadius: '1rem',
          width: '50%',
          backgroundColor: '#fff'
        }} 
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
        />
        
        <TextField
          error={false}
          margin="normal"
          fullWidth
          autoFocus
          helperText=""
          label="Curso"
          name="course"
          type="text"
          variant="outlined"
        />
        <TextField
          error={false}
          fullWidth
          margin="normal"
          autoFocus
          helperText=""
          label="Usuário (Para login)"
          name="email"
          type="email"
          variant="outlined"
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
        />
  
        {alert && <FormHelperText error>{alert}</FormHelperText>}
  
        <Button
          sx={{ mt: 3 }}
          color="primary"
          type="submit"
          fullWidth
          size="large"
          variant="contained"
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