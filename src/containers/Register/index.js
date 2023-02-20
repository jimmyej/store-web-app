import React , {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputText from '../../components/InputText';
import { register } from '../../core/Auths/services';
import { HttpStatusCode } from 'axios';
import { useHistory } from "react-router-dom";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Lincol
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Register = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: password,
        status: true
    };

    register(data).then((response) => {
        console.log("response: ", JSON.stringify(response))
        if(response.status === HttpStatusCode.Ok) {
            console.log(response.data.message)
            history.push(`/`);
        } else {
            console.log("Erro while registering user")
        }
    })

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputText
                    id="firstname"
                    label="First Name"
                    value={firstname}
                    handleChange={(e) => setFirstname(e.target.value)}
                    focus={true}
                />  
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputText
                    id="lastName"
                    label="Last Name"
                    value={lastname}
                    handleChange={(e) => setLastname(e.target.value)}
                />  
              </Grid>
              <Grid item xs={12}>
                <InputText
                    id="email"
                    label="Email"
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                    type="email"
                />  
              </Grid>
              <Grid item xs={12}>
                <InputText
                    id="username"
                    label="Username"
                    value={username}
                    handleChange={(e) => setUsername(e.target.value)}
                />  
              </Grid>
              <Grid item xs={12}>
                <InputText
                    id="password"
                    label="Password"
                    value={password}
                    handleChange={(e) => setPassword(e.target.value)}
                    type="password"
                />  
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Register