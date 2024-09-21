/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React, { memo } from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  Tooltip,
  Link,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiReact,
  SiMongodb,
  SiSocketdotio,
  SiTailwindcss,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import chatImg from "../assets/chat.png";
import NoteImg from "../assets/notes.png";
import ExpenseImg from "../assets/expense.png";
import AuthImg from "../assets/Auth.png";

// Project data with tech stack icons
const projects = [
  {
    title: "Chat Application",
    description:
      "A real-time chat application built with React, Node.js, and Socket.io.",
    techStack: [
      SiReact,
      SiMongodb,
      SiSocketdotio,
      SiTailwindcss,
      SiRedux,
      SiExpress,
    ],
    githubLink: "https://github.com/Jatinkr07/FizzChat-v1",
    image: chatImg,
  },
  {
    title: "Notes Application",
    description:
      "An expense tracking application with beautiful charts and animations.",
    techStack: [SiReact, SiMongodb, SiTailwindcss, SiExpress],
    githubLink: "https://github.com/Jatinkr07/TakeNotes-App",
    image: NoteImg,
  },
  {
    title: "Expense Tracker",
    description: "A comprehensive expense tracker with analytics and charts.",
    techStack: [SiReact, SiMongodb, SiExpress, SiTailwindcss],
    githubLink: "https://github.com/Jatinkr07/ExpenseTrackerApp",
    image: ExpenseImg,
  },
  {
    title: "MERN Auth",
    description: "User authentication system built using the MERN stack.",
    techStack: [SiReact, SiMongodb, SiExpress],
    githubLink: "https://github.com/Jatinkr07/Here-s-A-MERN-Auth-App",
    image: AuthImg,
  },
];

const Projects = memo(() => {
  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
  });

  return (
    <Box id="projects" p={5} bg="gray.100" _dark={{ bg: "gray.900" }}>
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={8}
      >
        Projects
      </Text>
      <Flex
        wrap="wrap"
        justify="center"
        gap={8}
        gridTemplateColumns={gridTemplateColumns}
      >
        {projects.map(
          ({ title, description, techStack, githubLink, image }, index) => (
            <Box
              key={index}
              bg="white"
              _dark={{ bg: "gray.800" }}
              p={4}
              borderRadius="md"
              shadow="md"
              maxW="sm"
              textAlign="center"
              position="relative"
              overflow="hidden"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)", shadow: "lg" }}
            >
              <Image
                src={image}
                alt={title}
                borderRadius="md"
                mb={4}
                objectFit="cover"
                width="100%"
                height="auto"
                fallbackSrc="https://via.placeholder.com/400x300?text=No+Image"
              />
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                mb={3}
              >
                {title}
              </Text>
              <Text mb={4} fontSize={{ base: "sm", md: "md" }}>
                {description}
              </Text>
              <HStack justify="center" spacing={4} mb={4}>
                {techStack.map((TechIcon, i) => (
                  <Tooltip label={TechIcon.displayName} key={i}>
                    <Box as={TechIcon} size="24px" />
                  </Tooltip>
                ))}
              </HStack>
              <HStack justify="center" spacing={4} mb={4}>
                {githubLink && (
                  <Link href={githubLink} isExternal>
                    <FaGithub size={24} />
                  </Link>
                )}
                {githubLink && (
                  <Link href={githubLink} isExternal>
                    <FaLinkedin size={24} />
                  </Link>
                )}
              </HStack>
            </Box>
          )
        )}
      </Flex>
    </Box>
  );
});

export default Projects;
