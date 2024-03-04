import type { Metadata } from "next";
import "./globals.css";
import { Grid, ThemeProvider } from "@mui/material";
import Header from "@/src/components/Header";
import { mainTheme } from "@/src/themes/mainTheme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={mainTheme}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
            >
              <Grid
                item
                container
                maxWidth={980}
                alignItems='center'
                justifyContent='center'
              >
                <Header/>
                {children}
              </Grid>
            </Grid>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
