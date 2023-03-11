
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import InputText from "../../../components/InputText";
import Copyright from "../../../components/Copyright";

const theme = createTheme();

const ForgotPassword = () => {

    const history = useHistory();

    const [email, setEmail] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Sending notification.....")
        history.push('/')
    }

    const goLogin = () => {
        history.push('/')
      }

    return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Forgot password
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <InputText
                  id="email"
                  label="email"
                  value={email}
                  handleChange={(e) => setEmail(e.target.value)}
                  focus={true}
                />
    
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send
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

export default ForgotPassword