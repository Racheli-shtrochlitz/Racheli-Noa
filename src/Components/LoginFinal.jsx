import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../Store/UserSlice';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  CssVarsProvider,
  CssBaseline,
  Sheet,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Button,
  useTheme,
  Grid,
} from '@mui/joy';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/system';
import '../LoginFinal.css';
import { Toolbar } from '@mui/material';
import Footer from './Footer';

const SignupSchema = yup.object().shape({
  name: yup.string().required("נא להזין שם"),
  email: yup.string().email("כתובת מייל לא תקינה").required("נא להזין כתובת מייל"),
  password: yup
    .string()
    .required("נא להזין סיסמה")
    .min(8, "סיסמה חייבת להכיל לפחות 8 תווים")
    .matches(/[A-Z]/, "סיסמה חייבת לכלול לפחות אות גדולה אחת")
    .matches(/[a-z]/, "סיסמה חייבת לכלול לפחות אות קטנה אחת")
    .matches(/[0-9]/, "סיסמה חייבת לכלול לפחות ספרה אחת")
    .matches(/[@$!%*?&#]/, "סיסמה חייבת לכלול לפחות תו מיוחד אחד"),
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userObj = useSelector((state) => state.UserSlice);
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const theme = useTheme(); // שימוש ב-theme

  const passwordRules = [
    { test: (value) => value.length >= 8, message: "לפחות 8 תווים" },
    { test: (value) => /[A-Z]/.test(value), message: "אות גדולה אחת לפחות" },
    { test: (value) => /[a-z]/.test(value), message: "אות קטנה אחת לפחות" },
    { test: (value) => /[0-9]/.test(value), message: "ספרה אחת לפחות" },
    { test: (value) => /[@$!%*?&#]/.test(value), message: "תו מיוחד אחד לפחות" },
  ];

  const validatePassword = (value) => {
    setPassword(value);
    if (value) setIsTyping(true);

    const failedRules = passwordRules
      .filter((rule) => !rule.test(value))
      .map((rule) => rule.message);
    setPasswordErrors(failedRules);
  };

  const onSubmit = (data) => {
    dispatch(createUser({ email: data.email, password: data.password, name: data.name }));
    navigate('/profile');
  };

  return (
    <>
      <ResponsiveAppBar />
      <Toolbar />
      <CssVarsProvider>
        <CssBaseline />
        <div className="login-container">
          <Sheet
            sx={{
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              borderRadius: '10px',
              padding: '30px',
              top: '8vh',
              height: '60vh',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <Typography component="h1" sx={{ color: theme.palette.primary.main, fontWeight: 'bold', marginBottom: '10px' }}>
              ברוך הבא!
            </Typography>
            <Typography component="p" sx={{ color: theme.palette.text.secondary, marginBottom: '20px' }}>
              התחבר כדי להמשיך
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>שם</FormLabel>
                <Input {...register("name")} error={!!errors.name} />
                {errors.name && <Typography sx={{ color: theme.palette.error.main }}>{errors.name.message}</Typography>}
              </FormControl>
              <FormControl>
                <FormLabel>מייל</FormLabel>
                <Input {...register("email")} type="email" error={!!errors.email} />
                {errors.email && <Typography sx={{ color: theme.palette.error.main }}>{errors.email.message}</Typography>}
              </FormControl>
              <FormControl>
                <FormLabel>סיסמה</FormLabel>
                <Input
                  {...register("password")}
                  type="password"
                  onChange={(e) => validatePassword(e.target.value)}
                  error={!!errors.password}
                />
                {errors.password && <Typography sx={{ color: theme.palette.error.main }}>{errors.password.message}</Typography>}
                {isTyping && (
                  <Box>
                    <ul>
                      {passwordRules.map((rule, index) => (
                        <li key={index}>
                          <Typography
                            sx={{
                              color: passwordErrors.includes(rule.message)
                                ? theme.palette.error.main
                                : theme.palette.success.main,
                            }}
                          >
                            {rule.message}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}
              </FormControl>
              <Button
                type="submit"
                sx={{
                  marginTop: '20px',
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  '&:hover': { backgroundColor: theme.palette.primary.dark },
                }}
              >
                התחבר
              </Button>
            </form>
          </Sheet>
        </div>
      </CssVarsProvider>
      <Footer />
    </>
  );
}
