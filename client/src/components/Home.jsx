/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, memo, lazy, Suspense } from "react";
import {
  Box,
  Text,
  Button,
  Image,
  useBreakpointValue,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import profileImage from "../assets/profile.jpg";

const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

const useTypingEffect = (words, speed, skipDelay) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[wordIndex].length) {
          setSkipCount((prev) => prev + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        } else {
          setOffset((prev) => prev + 1);
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setOffset(0);
        } else {
          setOffset((prev) => prev - 1);
        }
      }
      setDisplayedText(words[wordIndex].substring(0, offset));
    }, speed);

    return () => clearInterval(interval);
  }, [offset, forwards, skipCount, wordIndex]);

  return displayedText;
};

const Home = memo(() => {
  const words = ["Software Developer", "MERN Stack Developer", "Programmer"];
  const displayedText = useTypingEffect(words, 70, 15);

  const styles = {
    textSize: useBreakpointValue({ base: "xl", md: "2xl", lg: "4xl" }),
    textColor: useColorModeValue("gray.800", "gray.100"),
    bgColor: useColorModeValue("gray.50", "gray.800"),
    spanColor: useColorModeValue("green.700", "green.400"),
    headColor: useColorModeValue("blue.500", "blue.400"),
  };

  return (
    <Box minH="100vh" p={10} bg={styles.bgColor}>
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
          <Text
            fontSize={styles.textSize}
            fontWeight="bold"
            mb={4}
            color={styles.textColor}
          >
            <Text className="head" color={styles.headColor}>
              {displayedText}
              <span className="console-underscore">|</span>
            </Text>
          </Text>
          <Text fontSize="2xl" mb={4} color={styles.textColor}>
            Hi, I'm Jatin Kumar. I'm a{" "}
            <Box
              as="span"
              color={styles.spanColor}
              fontSize="2xl"
              fontWeight="bold"
            >
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
            loading="lazy"
          />
        </Box>
      </Flex>

      {/* Sections */}
      <Suspense
        fallback={
          <Box p={10} textAlign="center">
            Loading...
          </Box>
        }
      >
        <Box
          id="about"
          p={10}
          mt={28}
          bg={useColorModeValue("white", "gray.700")}
        >
          <About />
        </Box>
        <Box
          id="projects"
          p={10}
          mt={28}
          bg={useColorModeValue("white", "gray.700")}
        >
          <Projects />
        </Box>
        <Box id="skills" p={10} bg={useColorModeValue("white", "gray.700")}>
          <Skills />
        </Box>
        <Box
          id="contact"
          p={10}
          mt={28}
          bg={useColorModeValue("white", "gray.700")}
        >
          <Contact />
        </Box>
      </Suspense>
    </Box>
  );
});

export default Home;
