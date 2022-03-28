import { TextField, Button, FormHelperText,Typography } from '@mui/material'

export const FormLogin = () => {
    return (
        <form style={{
        border: 'solid 1px #000', 
        padding: '2rem', 
        borderRadius: '1rem'}} noValidate>
  
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
          Login
        </Button>
        <Typography 
        sx={{ mb: 1, width: '100%', textAlign: 'center' }}
        color="text.secondary"
        >
          Ou <a href="/">Cadastre-se</a>
        </Typography>
      </form>
    )
}