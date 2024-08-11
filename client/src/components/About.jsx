/* eslint-disable react/no-unescaped-entities */
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
import { useState } from "react";

const MotionBox = motion(Box);

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(true);
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.900", "gray.100");
  const buttonColorScheme = useColorModeValue("blue", "cyan");

  return (
    <MotionBox
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      p={8}
      bg={bgColor}
      color={textColor}
      textAlign="center"
      width="100%"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width="100%"
        maxW="container.lg"
        p={6}
        borderRadius="lg"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="lg"
        position="relative"
      >
        <Heading as="h1" size="2xl" mb={4}>
          Hey there! 👋 I'm Jatin Kumar
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mb={6}>
          Welcome to My World of Code! I'm a dedicated Software Development
          Engineer with a passion for turning ideas into interactive web
          experiences. Currently, I'm pursuing a B.Tech in Computer Science at
          Echelon Institute of Technology, with my graduation set for May 2025.
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} mb={6}>
          <Heading as="h1" size="2xl" mb={4}>
            What Sparks My Interest🚀
          </Heading>
          I thrive on building full-stack web applications that don’t just
          function but wow users. My coding journey has equipped me with the
          skills to craft seamless user interfaces using React.js and Tailwind
          CSS. On the backend, I ensure everything runs smoothly with Node.js,
          Express.js, and MongoDB.
        </Text>
        <Stack
          direction={useBreakpointValue({ base: "column", md: "row" })}
          spacing={4}
          justify="center"
          mb={6}
        >
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
          >
            GitHub
          </Button>
        </Stack>
        <Text fontSize={{ base: "md", md: "lg" }} mb={6}>
          Thanks for stopping by—let's build something amazing together! ✨
        </Text>
        <Fade in={isVisible}>
          <Box
            position="relative"
            bottom={4}
            left="50%"
            transform="translateX(-50%)"
          >
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
          <Text mt={4} fontSize={{ base: "sm", md: "md" }}>
            Here’s a bit more about my work and projects. Feel free to explore
            and reach out if you have any questions!
          </Text>
        </Collapse>
      </Box>
    </MotionBox>
  );
};

export default AboutMe;
