import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting me!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Box
        id="contact"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 6,
          px: 2,
        }}
      >
        <Paper elevation={4} sx={{ p: { xs: 2, sm: 4 }, maxWidth: 500, width: "100%" }}>
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
            Contact Me
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={4}
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                background: "#1c75d4",
                color: "#ffff",
                fontWeight: "bold",
                fontFamily: '"Libertinus Mono", monospace'
              }}
            >
              Send Message
            </Button>
          </form>
        </Paper>
      </Box>
      <footer className="w-full fixed bottom-0 left-0 text-center text-black font-semibold text-xs sm:text-lg opacity-80 bg-white py-2 z-50">
        Made by: Vikas. Shanabhog
      </footer>
    </>
  );
};

export default Contact;