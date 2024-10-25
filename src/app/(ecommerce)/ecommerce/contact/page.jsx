import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import ContactForm from "../../../../section/ContactForm";

const HeroContact = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        margin: "20px auto",
        width: "90%",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#333" }}
      >
        Contact Us
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#666", lineHeight: "1.6", textAlign: "center" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        debitis magnam velit veniam maxime quia perspiciatis odio atque
        assumenda repudiandae.
      </Typography>
    </Box>
  );
};

const Contact = () => {
  return (
    <Box>
      {/* Hero Contact Section */}
      <HeroContact />

      {/* Contact Form Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Adjust if needed for layout
          padding: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <ContactForm />
      </Box>

      {/* Normal Problems Section */}
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: { xs: "90%", sm: "80%", md: "60%" }, // Responsive width
          margin: "20px auto",
          minHeight: "35rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", fontWeight: "bold", color: "#333" }}
        >
          Normal Problems
        </Typography>
        <div style={{ width: "100%", flexGrow: 1 }}>
          {/* Accordion Container */}
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h6">Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography variant="h6">Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography variant="h6">Accordion Actions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <Button size="small">Cancel</Button>
                <Button size="small">Agree</Button>
              </AccordionActions>
            </Accordion>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Contact;
