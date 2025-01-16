// import * as React from 'react';
// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { createUser } from '../Store/UserSlice';
// import ResponsiveAppBar from './ResponsiveAppBar';
// import { Link, useNavigate } from 'react-router-dom';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import {
//   CssVarsProvider,
//   CssBaseline,
//   Sheet,
//   Typography,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
// } from '@mui/joy';
// import '../LoginFinal.css';
// import { useForm } from 'react-hook-form';
// import { Box } from '@mui/system';
// // סכמת אימות
// const SignupSchema = yup.object().shape({
//   name: yup.string().required("First name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup
//     .string()
//     .required("Password is required")
//     .min(8, "Password must be at least 8 characters")
//     .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//     .matches(/[a-z]/, "Password must contain at least one lowercase letter")
//     .matches(/[0-9]/, "Password must contain at least one number")
//     .matches(/[@$!%*?&#]/, "Password must contain at least one special character"),
// });
// export default function LoginFinal() {
//   const dispatch = useDispatch();
//   const userObj = useSelector((x) => x.UserSlice);
//   const navigate = useNavigate();
//   const [password, setPassword] = useState("");
//   const [passwordErrors, setPasswordErrors] = useState([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(SignupSchema),
//   });
//   // חוקים לסיסמה
//   const passwordRules = [
//     { test: (value) => value.length >= 8, message: "At least 8 characters" },
//     { test: (value) => /[A-Z]/.test(value), message: "One uppercase letter" },
//     { test: (value) => /[a-z]/.test(value), message: "One lowercase letter" },
//     { test: (value) => /[0-9]/.test(value), message: "One number" },
//     { test: (value) => /[@$!%*?&#]/.test(value), message: "One special character" },
//   ];


//   // const handleLogin = () => {
//   //   dispatch(createUser({ email, password, name }));
//   //   console.log(userObj.password);
//   //   console.log(userObj.email);
//   //   navigate('/profile');
//   // };

//   React.useEffect(() => {
//     console.log('Email:', userObj.email);
//     console.log('Password:', userObj.password);
//   }, [userObj]);

//   const validatePassword = (value) => {
//     setPassword(value);
//     if (value) setIsTyping(true);

//     const failedRules = passwordRules
//       .filter((rule) => !rule.test(value))
//       .map((rule) => rule.message);
//     setPasswordErrors(failedRules);
//   };

//   const onSubmit = (data) => {
//     console.log("i here onSubmit");
//     dispatch(createUser({ email: data.email, password: data.password, name: data.name }));
//     console.log(userObj.password);
//     console.log(userObj.email);
//     console.log(userObj.name);
//     navigate('/profile');
//   };
//   return (
//     <>
//       <ResponsiveAppBar />
//       <CssVarsProvider>
//         <CssBaseline />
//         <div className="login-container">
//           <Sheet
//             sx={{
//               padding: '20px',
//               maxWidth: '400px',
//               margin: 'auto',
//               backgroundColor: '#fff',
//               borderRadius: '10px',
//               boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             <Typography
//               component="h1"
//               level="h4"
//               sx={{ marginBottom: '20px', color: '#f06292', fontWeight: 'bold' }}
//             >
//               ברוך הבא!
//             </Typography>
//             <Typography
//               component="p"
//               level="body2"
//               sx={{ marginBottom: '20px', color: '#555' }}
//             >
//               אנא היכנס כדי להמשיך.
//             </Typography>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <FormControl>
//                 <FormLabel>שם</FormLabel>
//                 <Input
//                   name="name"
//                   type="text"
//                   placeholder=""


//                   {...register("name")}
//                   error={!!errors.name}
//                   helperText={errors.name?.message}
//                   sx={{
//                     '& .MuiInputBase-root': {
//                       borderColor: '#ccc',
//                       '&:hover': { borderColor: '#f06292' },
//                       '&:focus': { borderColor: '#d81b60' },
//                     },
//                   }}
//                 />
//                 {errors.name && <Typography color="error">{errors.name.message}</Typography>}



//               </FormControl>
//               <FormControl>

//                 <FormLabel>מייל</FormLabel>
//                 <Input
//                   {...register("email")}
//                   type="email"
//                   sx={{
//                     borderColor: '#ccc',
//                     '&:hover': { borderColor: '#f06292' },
//                     '&:focus': { borderColor: '#d81b60' },
//                   }}
//                 />
//                 {errors.email && <Typography color="error">{errors.email.message}</Typography>}
//               </FormControl>

//               <FormControl>
//                 <FormLabel>סיסמא</FormLabel>
//                 <Input
//                   {...register("password")}
//                   type="password"
//                   onChange={(e) => validatePassword(e.target.value)}
//                   sx={{
//                     borderColor: '#ccc',
//                     '&:hover': { borderColor: '#f06292' },
//                     '&:focus': { borderColor: '#d81b60' },
//                   }}
//                 />
//                 {errors.password && <Typography color="error">{errors.password.message}</Typography>}

//                 {isTyping && (
//                   <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", backgroundColor: 'background.paper' }}>
//                     <ul>
//                       {passwordRules.map((rule, index) => (
//                         <li key={index}>
//                           <Typography
//                             sx={{
//                               color: passwordErrors.includes(rule.message) ? "red" : "green",
//                               fontSize: "0.9em",
//                             }}
//                           >
//                             {rule.message}
//                           </Typography>
//                         </li>
//                       ))}
//                     </ul>
//                   </Box>
//                 )}
//               </FormControl>


//               <Button
//                 type="submit"
//                 variant="solid"
//                 sx={{
//                   marginTop: '15px',
//                   backgroundColor: '#f06292',
//                   color: '#fff',
//                   '&:hover': { backgroundColor: '#d81b60' },
//                 }}
//               >
//                 התחבר
//               </Button>
//             </form>
//             {/* <Typography
//               sx={{
//                 marginTop: '20px',
//                 fontSize: '14px',
//                 color: '#777',
//               }}
//             >
//               אין לך חשבון?{' '}
//               <Link href="/Login" sx={{ color: '#f06292', textDecoration: 'none' }}>
//                 הירשם כאן
//               </Link>
//             </Typography> */}
//           </Sheet>
//         </div>
//         {/* <footer className="footer">
//           <p>
//             © 2024 אתר המתכונים | <Link to="/about">אודות</Link> | <Link to="/contact">צור קשר</Link>
//           </p>
//         </footer> */}
//       </CssVarsProvider>
//     </>
//   );
// }

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
            <footer className="footer">
              <p>
                © 2024 אתר המתכונים | <Link to="/">דף הבית</Link> | <Link to="/contact">צור קשר</Link>
              </p>
            </footer>
      </CssVarsProvider>
    </>
  );
}
