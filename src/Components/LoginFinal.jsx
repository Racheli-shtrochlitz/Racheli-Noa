import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../Store/UserSlice';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useNavigate } from 'react-router-dom';
import {
  CssVarsProvider,
  CssBaseline,
  Sheet,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from '@mui/joy';
import '../LoginFinal.css';
export default function LoginFinal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const userObj = useSelector((x) => x.UserSlice);
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(createUser({ email, password,name }));
    console.log(userObj.password);
    console.log(userObj.email);
    navigate('/profile');
  };
  React.useEffect(() => {
    console.log('Email:', userObj.email);
    console.log('Password:', userObj.password);
  }, [userObj]);
  return (
    <>
      <ResponsiveAppBar />
      <CssVarsProvider>
        <CssBaseline />
        <div className="login-container">
          <Sheet
            sx={{
              padding: '20px',
              maxWidth: '400px',
              margin: 'auto',
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              component="h1"
              level="h4"
              sx={{ marginBottom: '20px', color: '#f06292', fontWeight: 'bold' }}
            >
              ברוך הבא!
            </Typography>
            <Typography
              component="p"
              level="body2"
              sx={{ marginBottom: '20px', color: '#555' }}
            >
              אנא היכנס כדי להמשיך.
            </Typography>
            <form className="login-form">
            <FormControl>
                <FormLabel>שם</FormLabel>
                <Input
                  name="name"
                  type="text"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{
                    borderColor: '#ccc',
                    '&:hover': { borderColor: '#f06292' },
                    '&:focus': { borderColor: '#d81b60' },
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>מייל</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    borderColor: '#ccc',
                    '&:hover': { borderColor: '#f06292' },
                    '&:focus': { borderColor: '#d81b60' },
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>סיסמא</FormLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    borderColor: '#ccc',
                    '&:hover': { borderColor: '#f06292' },
                    '&:focus': { borderColor: '#d81b60' },
                  }}
                />
              </FormControl>
              <Button
                variant="solid"
                sx={{
                  marginTop: '15px',
                  backgroundColor: '#f06292',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#d81b60' },
                }}
                onClick={handleLogin}
              >
                התחבר
              </Button>
            </form>
            <Typography
              sx={{
                marginTop: '20px',
                fontSize: '14px',
                color: '#777',
              }}
            >
              אין לך חשבון?{' '}
              <Link href="/Login" sx={{ color: '#f06292', textDecoration: 'none' }}>
                הירשם כאן
              </Link>
            </Typography>
          </Sheet>
        </div>
        <footer className="footer">
          <p>
            © 2024 אתר המתכונים | <Link to="/about">אודות</Link> | <Link to="/contact">צור קשר</Link>
          </p>
        </footer>
      </CssVarsProvider>
    </>
  );
}
