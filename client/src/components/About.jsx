/* eslint-disable react/display-name */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Fade,
  Collapse,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const MotionBox = motion(Box);

const AboutMe = React.memo(() => {
  const [isVisible, setIsVisible] = useState(true);

  // Memoizing values to prevent re-computations on each render
  const textColor = useColorModeValue("gray.900", "gray.100");
  const buttonColorScheme = useColorModeValue("blue", "cyan");
  const headingSize = useBreakpointValue({ base: "xl", sm: "2xl", md: "3xl" });
  const subheadingSize = useBreakpointValue({
    base: "lg",
    sm: "xl",
    md: "2xl",
  });
  const fontSize = useBreakpointValue({ base: "md", sm: "lg", md: "xl" });
  const stackDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <MotionBox
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      px={{ base: 4, sm: 6, md: 8 }}
      py={{ base: 6, sm: 8, md: 10 }}
      color={textColor}
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width="100%"
      maxW="container.xl"
      overflow="hidden"
    >
      <Heading as="h1" size={headingSize} mb={8} textAlign="center">
        Hey there! 👋 I'm Jatin Kumar
      </Heading>

      <Box width="100%" maxW="container.lg" mx="auto" textAlign="center">
        <Text fontSize={fontSize} mb={6} overflowWrap="break-word">
          Welcome to My World of Code! I'm a dedicated Software Development
          Engineer with a passion for turning ideas into interactive web
          experiences. Currently, I'm pursuing a B.Tech in Computer Science at
          Echelon Institute of Technology, with my graduation set for May 2025.
        </Text>

        <Text fontSize={fontSize} mb={6} overflowWrap="break-word">
          <Heading as="h2" size={subheadingSize} mb={4}>
            What Sparks My Interest 🚀
          </Heading>
          I thrive on building full-stack web applications that don’t just
          function but wow users. My coding journey has equipped me with the
          skills to craft seamless user interfaces using React.js and Tailwind
          CSS. On the backend, I ensure everything runs smoothly with Node.js,
          Express.js, and MongoDB.
        </Text>

        <Stack direction={stackDirection} spacing={4} justify="center" mb={6}>
          <Button
            as="a"
            href="https://www.linkedin.com/in/jatin-kumar2003"
            target="_blank"
            leftIcon={<FaLinkedin />}
            colorScheme={buttonColorScheme}
            size="lg"
            variant="outline"
            _hover={{
              bg: useColorModeValue("blue.50", "cyan.700"),
              color: useColorModeValue("blue.600", "cyan.200"),
            }}
            width={{ base: "100%", md: "auto" }}
          >
            LinkedIn
          </Button>
          <Button
            as="a"
            href="https://github.com/Jatinkr07"
            target="_blank"
            leftIcon={<FaGithub />}
            colorScheme={buttonColorScheme}
            size="lg"
            variant="outline"
            _hover={{
              bg: useColorModeValue("gray.50", "gray.700"),
              color: useColorModeValue("gray.600", "gray.300"),
            }}
            width={{ base: "100%", md: "auto" }}
          >
            GitHub
          </Button>
        </Stack>

        <Text fontSize={fontSize} mb={6} overflowWrap="break-word">
          Thanks for stopping by—let's build something amazing together! ✨
        </Text>

        <Fade in={isVisible}>
          <Box>
            <Button
              onClick={() => setIsVisible(!isVisible)}
              colorScheme="teal"
              size="sm"
            >
              {isVisible ? "Show Less" : "Show More"}
            </Button>
          </Box>
        </Fade>
        <Collapse in={isVisible}>
          <Text mt={4} fontSize={fontSize} overflowWrap="break-word">
            Here’s a bit more about my work and projects. Feel free to explore
            and reach out if you have any questions!
          </Text>
        </Collapse>
      </Box>
    </MotionBox>
  );
});

export default AboutMe;
