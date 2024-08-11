/* eslint-disable no-unused-vars */
// Footer.jsx
import React from "react";
import {
  Box,
  Text,
  Link,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";

const Footer = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const iconColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      bg={bgColor}
      color={textColor}
      py={6}
      position="relative"
      bottom={0}
      width="100%"
    >
      <Stack
        direction="column"
        align="center"
        spacing={4}
        maxW="6xl"
        mx="auto"
        px={6}
      >
        {/* Centered Copyright Text */}
        <Text textAlign="center">
          © {new Date().getFullYear()} Jatin Kumar. All rights reserved.
        </Text>

        {/* Centered Contact Section */}
        <Stack direction="row" spacing={6} justify="center">
          <Link href="mailto:your-email@gmail.com">
            <IconButton
              icon={<EmailIcon />}
              aria-label="Email"
              colorScheme="teal"
              variant="outline"
              _hover={{ bg: "teal.400", color: "white" }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/jatin-kumar2003" isExternal>
            <IconButton
              icon={<FaLinkedin />}
              aria-label="LinkedIn"
              colorScheme="teal"
              variant="outline"
              _hover={{ bg: "teal.400", color: "white" }}
            />
          </Link>
          <Link href="https://github.com/Jatinkr07" isExternal>
            <IconButton
              icon={<FaGithub />}
              aria-label="GitHub"
              colorScheme="teal"
              variant="outline"
              _hover={{ bg: "teal.400", color: "white" }}
            />
          </Link>
          <Link href="https://www.instagram.com/your-profile" isExternal>
            <IconButton
              icon={<FaInstagram />}
              aria-label="Instagram"
              colorScheme="teal"
              variant="outline"
              _hover={{ bg: "teal.400", color: "white" }}
            />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
