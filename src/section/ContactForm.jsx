"use client"
import { useForm } from "@formspree/react";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, TextField, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  subject: yup.string("Enter your subject").required("Subject is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  project: yup
    .string("Details about the project")
    .required("Please enter the details about the project"),
});

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xpwarogb");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      project: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values).then(() => {
        resetForm(); // Clear form fields after successful submission
      });
    },
  });

  return (
    <Fade in timeout={1000}>
      <Box
        sx={{
          maxWidth: "500px",
          // margin: "auto",
          padding: { xs: "2rem", md: "4rem" },
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          backgroundColor: "background.paper",
          transition: "transform 0.3s ease-in-out",
          // "&:hover": {
          //   transform: "scale(1.02)",
          //   boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          // },
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 2,
            textAlign: "center",
            color: "text.primary",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          Leave a Message
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            mb: 3,
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          Transform your health with Healing Hands Homoeopathy. Contact us
          today!
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <TextField
            label="Name"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            placeholder="Enter your name"
            variant="outlined"
            size="small"
            fullWidth
            required
            sx={{
              borderRadius: "4px",
              backgroundColor: "background.default",
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
            }}
          />
          <TextField
            label="Email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            placeholder="Enter your email"
            variant="outlined"
            size="small"
            fullWidth
            required
            sx={{
              borderRadius: "4px",
              backgroundColor: "background.default",
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
            }}
          />
          <TextField
            label="Subject"
            id="subject"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject && formik.errors.subject}
            placeholder="Enter your subject"
            variant="outlined"
            size="small"
            fullWidth
            required
            sx={{
              borderRadius: "4px",
              backgroundColor: "background.default",
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
            }}
          />
          <TextField
            label="Project"
            id="project"
            name="project"
            value={formik.values.project}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.project && Boolean(formik.errors.project)}
            helperText={formik.touched.project && formik.errors.project}
            placeholder="Describe your project"
            variant="outlined"
            size="small"
            multiline
            fullWidth
            rows={4}
            required
            sx={{
              borderRadius: "4px",
              backgroundColor: "background.default",
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              alignSelf: "center",
              textTransform: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "4px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              backgroundColor: "primary.main",
              transition:
                "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.dark",
                boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                transform: "scale(1.05)",
              },
            }}
            disabled={state.submitting}
          >
            Send Message
          </Button>
        </Box>
        {state.succeeded && (
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mt: "2rem",
              color: "success.main",
              fontWeight: "medium",
              transition: "opacity 0.5s ease",
            }}
          >
            Thanks for reaching out! I ll get back to you soon.
          </Typography>
        )}
      </Box>
    </Fade>
  );
};

export default ContactForm;
