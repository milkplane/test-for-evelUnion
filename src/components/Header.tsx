import { Box, Grid, Typography } from "@mui/material";
import { pointer } from "../svg/pointer";
import styles from './Header.module.css';

const Header = () => {
  return (
    <Grid container direction='row' className={styles.header}>
      <Grid item>
        <Box className={styles.title}>
          <Typography>Покемоны API</Typography>
        </Box>
      </Grid>
      <Grid ml='auto' item container width='auto' alignItems='center' justifyContent='center'>
        {pointer}
        <Typography className={styles.additionalInfo}>Нажмите на нужное Покемона</Typography>
      </Grid>
    </Grid>
  )
}

export default Header;