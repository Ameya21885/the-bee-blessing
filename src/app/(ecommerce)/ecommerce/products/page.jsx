"use client";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const AdsProduct = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
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
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

const AdsGrid = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }} // Adjust spacing for different screen sizes
        columns={{ xs: 4, sm: 8, md: 12 }} // Define columns for different screen sizes
      >
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Box
              sx={{
                // border: "1px solid #ddd",
                borderRadius: "10px", // Rounded corners for ads card
                padding: "1rem",
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effects
                "&:hover": {
                  transform: "translateY(-5px)", // Slightly lift the card on hover
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Add shadow on hover
                },
              }}
            >
              <AdsProduct />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const filterAutoCompleteData = [
  { label: "Most Relevant" },
  { label: "Price:Low to High" },
  { label: "Price:High to Low" },
];
const AddFilterSection = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="h6" component="h4">
        Showing
      </Typography>
      <Autocomplete
        disablePortal
        options={filterAutoCompleteData}
        sx={{ width: 300 }}
        size="small"
        renderInput={(params) => (
          <TextField {...params} label="Most Relevant" />
        )}
      />
    </Box>
  );
};

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="50"
        width="50"
        image="https://i.pinimg.com/enabled_hi/564x/0b/2d/ca/0b2dca26656031e0001f60f514a31c30.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
const ListOfProductGrid = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }} // Adjust spacing for different screen sizes
        columns={{ xs: 4, sm: 8, md: 12 }} // Define columns for different screen sizes
      >
        {Array.from(Array(10)).map((_, index) => (
          <Grid item xs={6} sm={3} md={3} key={index}>
            <Box>
              <ProductCard />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
const ListOfProducts = () => {
  return (
    <Box>
      <h4>List of products</h4>
      <ListOfProductGrid />
    </Box>
  );
};

const Products = () => {
  return (
    <div>
      <AdsGrid />
      <Box>
        <AddFilterSection />
        <ListOfProducts />
      </Box>
      Products
    </div>
  );
};

export default Products;
