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
import Copyright from '../../components/Copyright';

const theme = createTheme();

const Register = () => {
    const history = useHistory();

    const initial = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      status: false
    }

    const [request, setRequest] = useState(initial)

    const handleChange = (name, value) => {
      setRequest({...request, [name]: value});
    }

    const goLogin = () => {
      history.push('/')
    }

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {...request, "status": true};

    register(data).then((response) => {
        if(response.status === HttpStatusCode.Ok) {
            console.log(response.data.message)
            history.push(`/`);
        } else {
            console.log("Error while registering user")
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
                    value={request?.firstname}
                    handleChange={(e) => handleChange("firstname",e.target.value)}
                    focus={true}
                />  
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputText
                    id="lastname"
                    label="Last Name"
                    value={request.lastname}
                    handleChange={(e) => handleChange("lastname",e.target.value)}
                />  
              </Grid>
              <Grid item xs={12}>
                <InputText
                    id="email"
                    label="Email"
                    value={request.email}
                    handleChange={(e) => handleChange("email",e.target.value)}
                    type="email"
                />  
              </Grid>
              <Grid item xs={12}>
                <InputText
                    id="username"
                    label="Username"
                    value={request.username}
                    handleChange={(e) => handleChange("username",e.target.value)}
                />  
              </Grid>
              <Grid item xs={12}>
                <InputText
                    id="password"
                    label="Password"
                    value={request.password}
                    handleChange={(e) => handleChange("password",e.target.value)}
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
                <Link variant="body2" onClick={() => goLogin()}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright name="Lincol" sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Register