/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Text,
  Button,
  Image,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import profileImage from "../assets/profile.jpg";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const textSize = useBreakpointValue({ base: "xl", md: "2xl", lg: "4xl" });
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.800", "gray.100");
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const spanColor = useColorModeValue("green.700", "green.400");
  const headColor = useColorModeValue("blue.500", "blue.400");

  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

  const words = ["Software Developer", "MERN Stack Developer", "Programmer"];

  const speed = 70; // Typing speed in milliseconds
  const skipDelay = 15; // Number of iterations before switching direction

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[wordIndex].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        } else {
          setOffset(offset + 1);
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setOffset(0);
        } else {
          setOffset(offset - 1);
        }
      }
      setDisplayedText(words[wordIndex].substring(0, offset));
    }, speed);

    return () => clearInterval(interval);
  }, [offset, forwards, skipCount, wordIndex, speed, skipDelay]);

  return (
    <Box minH="100vh" p={10} bg={bgColor}>
      {/* Home Section */}
      <Flex
        id="home"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        mb={12}
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Text Section */}
        <Box
          flex={{ base: "1", md: "1 1 60%" }}
          mb={{ base: 8, md: 0 }}
          mt={20}
          position="relative"
        >
          <Text fontSize={textSize} fontWeight="bold" mb={4} color={textColor}>
            <Text className="head" color={headColor}>
              {displayedText}
              <span className="console-underscore">|</span>
            </Text>
          </Text>
          <Text fontSize="2xl" mb={4} color={textColor}>
            Hi, I'm Jatin Kumar. I'm a{" "}
            <Box as="span" color={spanColor} fontSize="2xl" fontWeight="bold">
              Software Development Engineer
            </Box>{" "}
            passionate about creating innovative web experiences.
          </Text>
          <Button colorScheme="teal" size="lg" mr={4}>
            <a href="mailto:jatinkumar07911@gmail.com">Hire Me</a>
          </Button>
          <Button colorScheme="blue" size="lg">
            <a
              href="https://storage.googleapis.com/resume-hosting/66cabecc1619c.pdf"
              download
            >
              Resume
            </a>
          </Button>
        </Box>

        {/* Profile Image */}
        <Box
          flex={{ base: "1", md: "1 1 40%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={{ base: 8, md: 20 }}
        >
          <Image
            src={profileImage}
            alt="Profile"
            borderRadius="full"
            boxSize="300px"
            objectFit="cover"
            boxShadow="xl"
          />
        </Box>
      </Flex>

      {/* About Section */}
      <Box
        id="about"
        p={10}
        mt={28}
        bg={useColorModeValue("white", "gray.700")}
      >
        <About />
      </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        p={10}
        mt={28}
        bg={useColorModeValue("white", "gray.700")}
      >
        <Projects />
      </Box>

      {/* Skills Section */}
      <Box id="skills" p={10} bg={useColorModeValue("white", "gray.700")}>
        <Skills />
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        p={10}
        mt={28}
        bg={useColorModeValue("white", "gray.700")}
      >
        <Contact />
      </Box>
    </Box>
  );
};

export default Home;
