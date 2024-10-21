import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import image1 from "../../src/assets/images/c1.jpeg";
import image2 from "../../src/assets/images/c2.jpeg";
import image3 from "../../src/assets/images/c3.png";
import image4 from "../../src/assets/images/c4.png";
import image5 from "../../src/assets/images/c5.jpeg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#000000",
    },
  },
});

const partners = [
  { id: 1, src: image1, alt: "Partner 1" },
  { id: 2, src: image2, alt: "Partner 2" },
  { id: 3, src: image3, alt: "Partner 3" },
  { id: 4, src: image4, alt: "Partner 4" },
  { id: 5, src: image5, alt: "Partner 5" },
];

const SocialButtons = () => (
  <Box display="flex" justifyContent="center" mt={2} gap={2}>
    <Button variant="outlined" sx={{ textTransform: "none", color: "#c72a20" }}>
      Facebook
    </Button>
    <Button variant="outlined" sx={{ textTransform: "none", color: "#c72a20" }}>
      Pinterest
    </Button>
    <Button variant="outlined" sx={{ textTransform: "none", color: "#c72a20" }}>
      Twitter
    </Button>
  </Box>
);

const PartnersSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 4, textAlign: "center", backgroundColor: "black" }}>
        <Typography variant="h4" color="white" gutterBottom fontWeight="bold">
          Our Partners
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {partners.map((partner) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={partner.id}>
              <Box
                component="img"
                src={partner.src}
                alt={partner.alt}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  maxHeight: "150px",
                  mt: 3,
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" color="white" mt={9}>
          Follow us on Social Networks
        </Typography>
        <SocialButtons />
      </Box>
    </ThemeProvider>
  );
};

export default PartnersSection;
