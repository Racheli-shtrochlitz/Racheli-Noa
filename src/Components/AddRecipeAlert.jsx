import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Drawer, Box, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useSelector, useDispatch, Provider } from "react-redux"
import { ReactReduxContext } from 'react-redux';
import { AddRecipe } from "../Store/RecipeListSlice";

const SignupSchema = yup.object().shape({
  name: yup.string().required("שם המתכון הוא שדה חובה"),
  category: yup.string().required(" קטגוריה הוא שדה חובה"),
  time: yup.string().required("זמן הכנה הוא שדה חובה"),
  ingredients: yup.string().required("רכיבים הם שדה חובה"),
  instructions: yup.string().required("הוראות הכנה הן שדה חובה"),
});

export default function AddRecipeAlert() {
  const dispatch = useDispatch();
  const arrObj = useSelector(x => x.RecipeListSlice);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    const formattedProducts = data.ingredients
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== ""); // סינון שורות ריקות
    const formattedInstructions = data.instructions
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== ""); // סינון שורות ריקות

    const formattedRecipe = {
      ...data,
      products: formattedProducts,
      instructions: formattedInstructions,
      id: arrObj.arr.length
    };
    console.log("New Recipe:", formattedRecipe);
    console.log(arrObj.arr);
    dispatch(AddRecipe(formattedRecipe));
    setIsDrawerOpen(false);
    console.log(arrObj.arr);
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result); // תצוגה מקדימה
        setValue('image', reader.result); // שמירת ה-Base64 בשדה image של react-hook-form
      };
      reader.readAsDataURL(file); // המרת התמונה ל-Base64
    }
  };


  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleDrawer(true)}
        style={{
          position: "fixed",
          top: "100px", // הכפתור ממוקם למעלה של המסך
          left: "-80px", // יוצא החוצה מהמסך בצד שמאל
          zIndex: 1000,
          borderRadius: "30px",  // רדיוס קצוות כדי ליצור צורת אליפסה
          width: "200px", // רוחב אליפסה
          height: "60px", // גובה אליפסה
          padding: 23,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          style={{
            fontSize: "18px",  // גודל הטקסט
          }}
        >
          הוספת מתכון
        </Typography>
      </Button>

      {/* <Button
        variant="contained" // כפתור להוספת מתכון
        color="primary"
        onClick={toggleDrawer(true)}
        style={{
          position: "fixed",
          bottom: "10px",
          left: "20px",
          zIndex: 1000,
        }}
      >
        הוסף מתכון
      </Button> */}

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box p={2} width={300} role="presentation" textAlign="center">
          <Typography variant="h6" gutterBottom>
            הוסף מתכון חדש
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="שם המתכון"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <FormControl fullWidth margin="normal" error={!!errors.category}>
              <InputLabel>קטגוריה</InputLabel>
              <Select
                {...register("category")}
                variant="outlined"
                helperText={errors.category?.message}
              >
                <MenuItem value="בשרי">בשרי</MenuItem>
                <MenuItem value="חלבי">חלבי</MenuItem>
                <MenuItem value="פרווה">פרווה</MenuItem>
              </Select>
              {errors.category && (
                <Typography variant="caption" color="error">
                  {errors.category.message}
                </Typography>
              )}
            </FormControl>

            <TextField
              label="זמן הכנה"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("time")}
              error={!!errors.time}
              helperText={errors.time?.message}
            />

            <TextField
              label="רכיבים"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              {...register("ingredients")}
              error={!!errors.ingredients}
              helperText={errors.ingredients?.message}
            />

            <TextField
              label="הוראות הכנה"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              {...register("instructions")}
              error={!!errors.instructions}
              helperText={errors.instructions?.message}
            />

            <Box textAlign="left" marginTop="16px">
              <Typography variant="subtitle1" gutterBottom>
                העלאת תמונה:
              </Typography>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                style={{ marginBottom: "16px" }}
              >
                בחר תמונה
                <input
                  type="file"
                  accept="image/*"
                  {...register("image")}
                  onChange={handleImageUpload}
                  hidden
                />
              </Button>
              {preview && (
                <Box textAlign="center" marginTop="8px">
                  <Typography variant="subtitle2">תצוגה מקדימה:</Typography>
                  <img
                    src={preview}
                    alt="תצוגה מקדימה"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "150px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    }}
                  />
                </Box>
              )}
            </Box>


            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "16px" }}
              type="submit"
            >
              שמור מתכון
            </Button>
          </form>
        </Box>
      </Drawer>
    </>
  );
}


