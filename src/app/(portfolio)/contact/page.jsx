import { Box, Typography } from "@mui/material";
import Image from "next/image";
import honeyBoy from "../../../../public/assets/honey-boy.jpg";
import contactUs from "../../../../public/assets/cantact-us.jpg";
import ContactForm from "../../../section/ContactForm";

const Contact = () => {
  return (
    <Box>
      {/* 1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack column for mobile, row for larger screens
          justifyContent: "space-around",
          alignItems: "center",
          height: "auto",
          padding: { xs: "20px", sm: "40px" }, // Responsive padding
          backgroundColor: "rgb(32,1,42)",
          backgroundImage:
            "linear-gradient(90deg, rgba(32,1,42,0.97) 0%, rgba(154,47,187,1) 64%, rgba(126,0,142,1) 100%)",
        }}
      >
        <Box sx={{ color: "white", textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            Lorem, ipsum dolor.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Lorem ipsum dolor sit.
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Box>

        <Box sx={{ mt: { xs: 2, sm: 0 } }}>
          {" "}
          <Image
            src={honeyBoy}
            alt="Picture of the author"
            width={230}
            height={200}
            blurDataURL="data:..."
            placeholder="blur"
            style={{ borderRadius: "10%" }}
          />
        </Box>
      </Box>

      {/* 2 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack in column on mobile, row on larger screens
          justifyContent: "space-around",
          alignItems: "center",
          gap: { xs: 2, sm: 4 }, // Adjusts the gap between items
          padding: { xs: "20px", sm: "40px" }, // Adds padding for spacing
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "50%" }, mb: { xs: 2, sm: 0 } }}>
          <ContactForm />
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "auto" }, textAlign: "center" }}>
          <Image
            src={contactUs}
            alt="Contact Us"
            width={230}
            height={100}
            blurDataURL="data:..." // Placeholder for loading image
            placeholder="blur"
            style={{ borderRadius: "10%" }}
          />
        </Box>
      </Box>

      {/* 3 */}
      <Box
        sx={{
          overflow: "hidden",
          height: "0",
          paddingBottom: "10%",
          position: "relative",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.597710907353!2d77.975402875111!3d27.168944876495374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477827465dbd7%3A0x937390b3da704919!2sArjun%20Nagar%20Airport%20Gate!5e0!3m2!1sen!2sin!4v1724410274179!5m2!1sen!2sin"
          width="100%"
          height="500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Contact;
