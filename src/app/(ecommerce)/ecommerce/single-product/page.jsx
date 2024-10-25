"use client";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import ReactImageMagnify from "react-image-magnify";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        padding: "40px",
        backgroundColor: "#f7f7f7",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        flexWrap: "wrap",
      }}
    >
      {/* Product Image */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          display: "flex",
          justifyContent: "center",
          marginBottom: { xs: "20px", md: "0" },
        }}
      >
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Product Image",
              isFluidWidth: true,
              src: "https://i.pinimg.com/enabled_hi/564x/c0/63/7b/c0637bfe1b701cd1ca40e0dd8fc84bf9.jpg",
            },
            largeImage: {
              src: "https://i.pinimg.com/enabled_hi/564x/c0/63/7b/c0637bfe1b701cd1ca40e0dd8fc84bf9.jpg",
              width: 1000,
              height: 1000,
            },
          }}
        />
      </Box>

      {/* Product Details */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Product Name, Price, and Description */}
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }}>
            Name of Product
          </Typography>
          <Typography variant="h5" sx={{ margin: "10px 0", color: "#ff4081" }}>
            Price: ₹ 1200
          </Typography>
          <Typography variant="body1" sx={{ color: "#666", lineHeight: "1.6" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            facere velit obcaecati dolor error ea corrupti facilis rerum animi
            nostrum?
          </Typography>
        </Box>

        {/* Quantity and Add to Cart */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            gap: "10px",
          }}
        >
          {/* Quantity Controls */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              backgroundColor: "#f1f1f1",
              borderRadius: "5px",
              padding: "5px 10px",
            }}
          >
            <Button variant="outlined" onClick={handleDecrement} sx={{ minWidth: "30px" }}>
              -
            </Button>
            <Typography variant="h6" sx={{ padding: "0 15px", fontWeight: "bold", color: "#333" }}>
              {quantity}
            </Typography>
            <Button variant="outlined" onClick={handleIncrement} sx={{ minWidth: "30px" }}>
              +
            </Button>
          </Box>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#ff4081",
              "&:hover": {
                backgroundColor: "#e91e63",
              },
            }}
          >
            Add To Cart
          </Button>
        </Box>

        {/* Horizontal Line for Separation */}
        <hr style={{ marginBottom: "20px", borderColor: "#ddd" }} />

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", gap: "20px", color: "#ff4081" }}>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaSquareWhatsapp size={30} />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
