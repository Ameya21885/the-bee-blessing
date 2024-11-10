// app/page.js

import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";

const MainCard = () => {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be nev o lent
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

const MainCardGrid=()=>{
  return(
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {Array.from(Array(3)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <MainCard/>
    </Grid>
  ))}
</Grid>
  )
}

export default function Dashboard() {
  return (
    <Box>
    <MainCardGrid/>
    </Box>
  );
}
