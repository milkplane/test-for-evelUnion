import { createTheme } from "@mui/material";
import { Raleway } from "next/font/google";

export const raleway = Raleway({
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "700"]
});


export const mainTheme = createTheme({
  typography: {
    ...raleway.style,
    
    h1: {
      fontWeight: 700,
      fontSize: 48,
      lineHeight: '48px',
      textTransform: 'capitalize',
    },

    body1: {
      fontWeight: 500,
      fontSize: 17,
      lineHeight: '25.5px',
      color: "#A0A0A0",
    },
  }
})