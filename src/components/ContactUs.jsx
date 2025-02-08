import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import ThankYouDialog from "./ThankYouDialog";
import { Typography } from "@mui/material";

const ContactUs = () => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email_id: "",
    phone_no: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const params = {
      from_name: formData.fullName,
      email_id: formData.email_id,
      phone_no: formData.phone_no,
      message: formData.message,
    };

    emailjs
      .send("service_m50cc7d", "template_kqm7r8s", params, "7yj-zySrwVdGk9EK5")
      .then((res) => {
        setOpen(true)
        setFormData({ fullName: "", email_id: "", phone_no: "", message: "" });
      })
      .catch((err) => {
        console.error("Error sending email:", err);
      })
      .finally(() => {
        setIsSending(false)
      })
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <motion.div
    id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0A192F] min-h-screen  p-5"
    >
      <Typography variant="h4" align="center" className="pt-20" color="white" gutterBottom>
        Contact Us
      </Typography>
      <div className="flex flex-col pt-20 items-center justify-center">
        <motion.form
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={sendEmail}
          className="bg-[#112240] p-8 rounded-lg shadow-lg max-w-lg w-full border border-[#233554]"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-[#233554] bg-[#0A192F] text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email_id"
            placeholder="Email Address"
            value={formData.email_id}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-[#233554] bg-[#0A192F] text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="phone_no"
            placeholder="Phone Number"
            value={formData.phone_no}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-[#233554] bg-[#0A192F] text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-[#233554] bg-[#0A192F] text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition shadow-lg"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
      <h2 className="text-2xl font-bold pt-20 text-center mb-6 text-gray-200">
        Follow Me On
      </h2>
      <div className="flex justify-center items-center gap-6">
        <a
          href="https://www.linkedin.com/in/virat-sathavara-576109249/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 transform hover:scale-110 hover:text-blue-500"
        >
          <LinkedInIcon style={{ fontSize: "50px", color: "white" }} />
        </a>

        <a
          href="https://github.com/ViratSathavara"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 transform hover:scale-110 hover:text-gray-500"
        >
          <GitHubIcon style={{ fontSize: "50px", color: "white" }} />
        </a>
      </div>
      <ThankYouDialog 
      open={open}
      onClose={onClose}
      setOpen={setOpen}

      />
    </motion.div>
  );
};

export default ContactUs;
