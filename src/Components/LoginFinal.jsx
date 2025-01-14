// import * as React from "react";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { createUser } from '../Store/UserSlice'
// import * as yup from "yup";
// import {
//   CssVarsProvider,
//   CssBaseline,
//   Typography,
//   Box,
//   Sheet,
// } from "@mui/joy";
// import { TextField,Button } from '@mui/material';

// // import "../style.css";
// import { useSelector, useDispatch } from 'react-redux';
// import { Link, useNavigate } from "react-router-dom";
// import ResponsiveAppBar from "./ResponsiveAppBar";
// import { FormControl, FormLabel } from "@mui/material";

// // חוקים לסיסמה
// const passwordRules = [
//   { test: (value) => value.length >= 8, message: "At least 8 characters" },
//   { test: (value) => /[A-Z]/.test(value), message: "One uppercase letter" },
//   { test: (value) => /[a-z]/.test(value), message: "One lowercase letter" },
//   { test: (value) => /[0-9]/.test(value), message: "One number" },
//   { test: (value) => /[@$!%*?&#]/.test(value), message: "One special character" },
// ];

// // סכמת אימות
// const SignupSchema = yup.object().shape({
//   firstName: yup.string().required("First name is required"),
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
//   const navigate = useNavigate();
//   const userObj = useSelector(x => x.UserSlice);
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
//     console.log(data);
//     dispatch(createUser({ email: data.email, password: data.password, name: data.firstName }));
//     console.log(userObj.password);
//     console.log(userObj.email);
//     console.log(userObj.name);
//     navigate('/profile');
//   };

//   return (
//     <>
//       <ResponsiveAppBar />
//       <CssVarsProvider>
//       <CssBaseline />
//       <div className="login-container">
//         <Sheet
//           sx={{
//             padding: '20px',
//             maxWidth: '400px',
//             margin: 'auto',
//             backgroundColor: '#fff',
//             borderRadius: '10px',
//             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//           }}
//         >
//           <Typography
//             component="h1"
//             level="h4"
//             sx={{ marginBottom: '20px', color: '#f06292', fontWeight: 'bold' }}
//           >
//             ברוך הבא!
//           </Typography>
//           <Typography
//             component="p"
//             level="body2"
//             sx={{ marginBottom: '20px', color: '#555' }}
//           >
//             אנא היכנס כדי להמשיך.
//           </Typography>

//           <form onSubmit={handleSubmit(onSubmit)} className="login-form">
//             <FormControl fullWidth margin="normal">
//               <FormLabel>שם</FormLabel>
//               <TextField
//                 {...register("firstName")}
//                 label="שם"
//                 fullWidth
//                 error={!!errors.firstName}
//                 helperText={errors.firstName?.message}
//                 sx={{
//                   '& .MuiInputBase-root': {
//                     borderColor: '#ccc',
//                     '&:hover': { borderColor: '#f06292' },
//                     '&:focus': { borderColor: '#d81b60' },
//                   },
//                 }}
//               />
//               {errors.firstName && <Typography color="error">{errors.firstName.message}</Typography>}
//             </FormControl>

//             <FormControl fullWidth margin="normal">
//               <FormLabel>מייל</FormLabel>
//               <TextField
//                 {...register("email")}
//                 type="email"
//                 sx={{
//                   borderColor: '#ccc',
//                   '&:hover': { borderColor: '#f06292' },
//                   '&:focus': { borderColor: '#d81b60' },
//                 }}
//               />
//               {errors.email && <Typography color="error">{errors.email.message}</Typography>}
//             </FormControl>

//             <FormControl fullWidth margin="normal">
//               <FormLabel>סיסמא</FormLabel>
//               <TextField
//                 {...register("password")}
//                 type="password"
//                 onChange={(e) => validatePassword(e.target.value)}
//                 sx={{
//                   borderColor: '#ccc',
//                   '&:hover': { borderColor: '#f06292' },
//                   '&:focus': { borderColor: '#d81b60' },
//                 }}
//               />
//               {errors.password && <Typography color="error">{errors.password.message}</Typography>}

//               {isTyping && (
//                 <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", backgroundColor: 'background.paper' }}>
//                   <ul>
//                     {passwordRules.map((rule, index) => (
//                       <li key={index}>
//                         <Typography
//                           sx={{
//                             color: passwordErrors.includes(rule.message) ? "red" : "green",
//                             fontSize: "0.9em",
//                           }}
//                         >
//                           {rule.message}
//                         </Typography>
//                       </li>
//                     ))}
//                   </ul>
//                 </Box>
//               )}
//             </FormControl>

//             <Button
//               type="submit"
//               variant="solid"
//               sx={{
//                 marginTop: '15px',
//                 backgroundColor: '#f06292',
//                 color: '#fff',
//                 '&:hover': { backgroundColor: '#d81b60' },
//               }}
//             >
//               התחבר
//             </Button>
//           </form>

//           <Typography
//             sx={{
//               marginTop: '20px',
//               fontSize: '14px',
//               color: '#777',
//             }}
//           >
//             אין לך חשבון?{' '}
//             {/* <Link href="/Login" sx={{ color: '#f06292', textDecoration: 'none' }}>
//                 הירשם כאן
//               </Link> */}
//           </Typography>
//         </Sheet>
//       </div>
//       </CssVarsProvider>
//     </>
//   );

// }



import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../Store/UserSlice';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useNavigate } from 'react-router-dom';
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
  Link,
} from '@mui/joy';
import '../LoginFinal.css';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/system';
// סכמת אימות
const SignupSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&#]/, "Password must contain at least one special character"),
});
export default function LoginFinal() {
  const dispatch = useDispatch();
  const userObj = useSelector((x) => x.UserSlice);
  const navigate = useNavigate();
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
  // חוקים לסיסמה
  const passwordRules = [
    { test: (value) => value.length >= 8, message: "At least 8 characters" },
    { test: (value) => /[A-Z]/.test(value), message: "One uppercase letter" },
    { test: (value) => /[a-z]/.test(value), message: "One lowercase letter" },
    { test: (value) => /[0-9]/.test(value), message: "One number" },
    { test: (value) => /[@$!%*?&#]/.test(value), message: "One special character" },
  ];


  // const handleLogin = () => {
  //   dispatch(createUser({ email, password, name }));
  //   console.log(userObj.password);
  //   console.log(userObj.email);
  //   navigate('/profile');
  // };

  // React.useEffect(() => {
  //   console.log('Email:', userObj.email);
  //   console.log('Password:', userObj.password);
  // }, [userObj]);

  const validatePassword = (value) => {
    setPassword(value);
    if (value) setIsTyping(true);

    const failedRules = passwordRules
      .filter((rule) => !rule.test(value))
      .map((rule) => rule.message);
    setPasswordErrors(failedRules);
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createUser({ email: data.email, password: data.password, name: data.name }));
    console.log(userObj.password);
    console.log(userObj.email);
    console.log(userObj.name);
    navigate('/profile');
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>שם</FormLabel>
                <Input
                  name="name"
                  type="text"
                  placeholder=""


                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  sx={{
                    '& .MuiInputBase-root': {
                      borderColor: '#ccc',
                      '&:hover': { borderColor: '#f06292' },
                      '&:focus': { borderColor: '#d81b60' },
                    },
                  }}
                />
                {errors.name && <Typography color="error">{errors.name.message}</Typography>}



              </FormControl>
              <FormControl>

                <FormLabel>מייל</FormLabel>
                <Input
                  {...register("email")}
                  type="email"
                  sx={{
                    borderColor: '#ccc',
                    '&:hover': { borderColor: '#f06292' },
                    '&:focus': { borderColor: '#d81b60' },
                  }}
                />
                {errors.email && <Typography color="error">{errors.email.message}</Typography>}
              </FormControl>

              <FormControl>
                <FormLabel>סיסמא</FormLabel>
                <Input
                  {...register("password")}
                  type="password"
                  onChange={(e) => validatePassword(e.target.value)}
                  sx={{
                    borderColor: '#ccc',
                    '&:hover': { borderColor: '#f06292' },
                    '&:focus': { borderColor: '#d81b60' },
                  }}
                />
                {errors.password && <Typography color="error">{errors.password.message}</Typography>}

                {isTyping && (
                  <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", backgroundColor: 'background.paper' }}>
                    <ul>
                      {passwordRules.map((rule, index) => (
                        <li key={index}>
                          <Typography
                            sx={{
                              color: passwordErrors.includes(rule.message) ? "red" : "green",
                              fontSize: "0.9em",
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
                variant="solid"
                sx={{
                  marginTop: '15px',
                  backgroundColor: '#f06292',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#d81b60' },
                }}
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
