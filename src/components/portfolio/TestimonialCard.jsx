import React from "react";
import { red } from "@mui/material/colors";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

const TestimonialCard = () => {
  return (
    <Card
      sx={{
        maxWidth: { xs: 300, sm: 400, md: 550 }, // Responsive width for mobile, tablet, desktop
        margin: "auto", // Center card
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ bgcolor: red[500], width: 56, height: 56 }}
          />
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
