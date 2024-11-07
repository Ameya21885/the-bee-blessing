// app/page.js

import { Box, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to the Admin Dashboard!
      </Typography>
      <Typography paragraph>
        This is the main area where you can manage your applications and view critical information.
      </Typography>
    </Box>
  );
}
