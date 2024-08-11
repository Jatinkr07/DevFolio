/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // POST request to backend
      await axios.post("https://devfolio-v1.onrender.com/send-email", {
        name,
        email,
        message,
      });

      // Success toast notification
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Clear form fields after submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      // Error toast notification
      toast({
        title: "Message Failed",
        description: `There was a problem sending your message: ${
          error.response?.data?.error || error.message
        }`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name" // Matches backend expectation
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email" // Matches backend expectation
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </FormControl>
        <FormControl id="message" mb={4} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message" // Matches backend expectation
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows={6}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
