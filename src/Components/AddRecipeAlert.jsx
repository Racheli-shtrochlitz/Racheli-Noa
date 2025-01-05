import React, { useState } from "react";
import { Button, Drawer, Box, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AddRecipe } from "../Store/RecipeListSlice";
export default function AddRecipeAlert() {
  const dispatch = useDispatch();
  const arrObj=useSelector(x=>x.RecipeListSlice)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    category: '',
    time: '',
    products: '',
    instructions: '',
    image: '', 
    like: false,
  });
  const [preview, setPreview] = useState(null);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleInputChange = (field) => (event) => {
    setNewRecipe({ ...newRecipe, [field]: event.target.value });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result); // תצוגה מקדימה
        setNewRecipe({ ...newRecipe, image: reader.result }); // שמירת ה-Base64
      };
      reader.readAsDataURL(file); // המרת התמונה ל-Base64
    }
  };

  const handleSave = () => {
    const formattedProducts = newRecipe.products
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== ""); // סינון שורות ריקות
    const formattedInstructions = newRecipe.instructions
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== ""); // סינון שורות ריקות
  
    const formattedRecipe = {
      ...newRecipe,
      products: formattedProducts,
      instructions:formattedInstructions,
      id:arrObj.arr.length
    };
  
    console.log("New Recipe:", formattedRecipe);
    dispatch(AddRecipe(formattedRecipe));
    setIsDrawerOpen(false);
  };
  

  return (
    <>
      <Button
        variant="contained"//כפתור להוספת מתכון
        color="primary"
        onClick={toggleDrawer(true)}
        style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        הוסף מתכון
      </Button>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          p={2}
          width={300}
          role="presentation"
          textAlign="center"
        >
          <Typography variant="h6" gutterBottom>
            הוסף מתכון חדש
          </Typography>
          <TextField
            label="שם המתכון"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newRecipe.name}
            onChange={handleInputChange('name')}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>קטגוריה</InputLabel>
            <Select
              value={newRecipe.category}
              onChange={handleInputChange('category')}
              variant="outlined"
            >
              <MenuItem value="בשרי">בשרי</MenuItem>
              <MenuItem value="חלבי">חלבי</MenuItem>
              <MenuItem value="פרווה">פרווה</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="רכיבים (שורה לכל רכיב)"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={newRecipe.products}
            onChange={handleInputChange('products')}
          />
          <TextField
            label="זמן הכנה"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newRecipe.time}
            onChange={handleInputChange('time')}
          />
          <TextField
            label="הוראות הכנה"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={newRecipe.instructions}
            onChange={handleInputChange('instructions')}
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
            onClick={handleSave}
          >
            שמור מתכון
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
