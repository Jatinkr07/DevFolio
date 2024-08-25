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
  const textColor = useColorModeValue("gray.900", "gray.100");
  const buttonColorScheme = useColorModeValue("blue", "cyan");

  return (
    <MotionBox
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      px={{ base: 4, sm: 6, md: 8 }} // Responsive padding
      py={{ base: 6, sm: 8, md: 10 }} // Responsive padding
      color={textColor}
      textAlign="center" // Center text
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width="100%" // Full width
      maxW="container.xl" // Maximum width for larger screens
      overflow="hidden" // Prevent overflow
    >
      <Box
        width="100%" // Full width
        maxW="container.lg" // Maximum width for medium screens
        px={{ base: 4, sm: 6, md: 8 }} // Responsive padding
        mx="auto" // Center the Box horizontally
        textAlign="center" // Ensure text is centered
      >
        <Heading
          as="h1"
          size={useBreakpointValue({ base: "xl", sm: "2xl", md: "3xl" })} // Responsive font size
          mb={4}
        >
          Hey there! 👋 I'm Jatin Kumar
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          mb={6}
          overflowWrap="break-word" // Handle text overflow
        >
          Welcome to My World of Code! I'm a dedicated Software Development
          Engineer with a passion for turning ideas into interactive web
          experiences. Currently, I'm pursuing a B.Tech in Computer Science at
          Echelon Institute of Technology, with my graduation set for May 2025.
        </Text>
        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          mb={6}
          overflowWrap="break-word" // Handle text overflow
        >
          <Heading
            as="h2"
            size={useBreakpointValue({ base: "lg", sm: "xl", md: "2xl" })}
            mb={4}
          >
            What Sparks My Interest 🚀
          </Heading>
          I thrive on building full-stack web applications that don’t just
          function but wow users. My coding journey has equipped me with the
          skills to craft seamless user interfaces using React.js and Tailwind
          CSS. On the backend, I ensure everything runs smoothly with Node.js,
          Express.js, and MongoDB.
        </Text>
        <Stack
          direction={useBreakpointValue({ base: "column", md: "row" })} // Stack direction
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
        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          mb={6}
          overflowWrap="break-word" // Handle text overflow
        >
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
          <Text
            mt={4}
            fontSize={{ base: "sm", sm: "md", md: "lg" }}
            overflowWrap="break-word"
          >
            Here’s a bit more about my work and projects. Feel free to explore
            and reach out if you have any questions!
          </Text>
        </Collapse>
      </Box>
    </MotionBox>
  );
};

export default AboutMe;
