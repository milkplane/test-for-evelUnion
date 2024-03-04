import { Grid, styled } from "@mui/material";

const ImageContainer = styled(Grid)(() => ({
  height: '200px',
  width: 'auto',
  textAlign: 'center',
  marginBottom: '44px',

  '& img': {
    height: '100%',
    width: 'auto',
  }
}));

export default ImageContainer;