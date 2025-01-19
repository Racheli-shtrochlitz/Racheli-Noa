import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
        py: 2, // Padding vertically
        px: 4, // Padding horizontally
        mt: 4, // Margin top for spacing
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        © 2024 אתר המתכונים
      </Typography>
      <Box>
        <Typography
          variant="body2"
          component={Link}
          to="/"
          sx={{
            color: "inherit",
            textDecoration: "none",
            mx: 1,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          דף הבית
        </Typography>
        |
        <Typography
          variant="body2"
          component={Link}
          to="/contact"
          sx={{
            color: "inherit",
            textDecoration: "none",
            mx: 1,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          צור קשר
        </Typography>
        |
        <Typography
          variant="body2"
          component={Link}
          to="/about"
          sx={{
            color: "inherit",
            textDecoration: "none",
            mx: 1,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          אודות
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
