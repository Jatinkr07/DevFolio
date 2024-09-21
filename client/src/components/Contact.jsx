/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React, { useState, memo } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const Contact = memo(() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Prevent rapid submissions
    if (loading) return;

    setLoading(true);
    try {
      console.log("Sending form data:", formData); // Debugging log
      await axios.post("https://devfolio-1.onrender.com/send-email", formData);

      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error); // More detailed error log
      const errorMsg =
        error.response?.data?.error || "An error occurred. Please try again.";
      toast({
        title: "Message Failed",
        description: errorMsg,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxW="md" mx="auto" p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </FormControl>
        <FormControl id="message" mb={4} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg" isLoading={loading}>
          Send Message
        </Button>
      </form>
    </Box>
  );
});

export default Contact;
