/* eslint-disable no-unused-vars */
import React from "react";
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
import { FaGithub, FaLinkedin, FaNode } from "react-icons/fa";
import {
  SiReact,
  SiMongodb,
  SiSocketdotio,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiChakraui,
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
      FaNode,
      SiMongodb,
      SiSocketdotio,
      SiTailwindcss,
      SiRedux,
      SiExpress,
    ],
    githubLink: "https://github.com/Jatinkr07/FizzChat-v1",
    linkedinLink: "https://www.linkedin.com/in/jatin-kumar2003",
    image: chatImg,
  },
  {
    title: "Notes Application",
    description:
      "An expense tracking application with beautiful charts and animations.",
    techStack: [SiReact, FaNode, SiMongodb, SiTailwindcss, SiExpress],
    githubLink: "https://github.com/Jatinkr07/TakeNotes-App",
    linkedinLink: "https://www.linkedin.com/in/jatin-kumar2003",
    image: NoteImg,
  },
  {
    title: "Expense Tracker",
    description: "A comprehensive expense tracker with analytics and charts.",
    techStack: [SiReact, FaNode, SiMongodb, SiExpress, SiTailwindcss],
    githubLink: "https://github.com/Jatinkr07/ExpenseTrackerApp",
    linkedinLink: "https://www.linkedin.com/in/jatin-kumar2003",
    image: ExpenseImg,
  },
  {
    title: "MERN Auth",
    description: "User authentication system built using the MERN stack.",
    techStack: [SiReact, FaNode, SiMongodb, SiExpress],
    githubLink: "https://github.com/Jatinkr07/Here-s-A-MERN-Auth-App",
    linkedinLink: "https://www.linkedin.com/in/jatin-kumar2003",
    image: AuthImg,
  },
];

const Projects = () => {
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
        {projects.map((project, index) => (
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
              src={project.image}
              alt={project.title}
              borderRadius="md"
              mb={4}
              objectFit="cover"
              width="100%"
              height="auto"
              fallbackSrc="https://via.placeholder.com/400x300?text=No+Image"
            />
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={3}>
              {project.title}
            </Text>
            <Text mb={4} fontSize={{ base: "sm", md: "md" }}>
              {project.description}
            </Text>
            <HStack justify="center" spacing={4} mb={4}>
              {project.techStack.map((TechIcon, i) => (
                <Tooltip label={TechIcon.displayName} key={i}>
                  <Box as={TechIcon} size="24px" />
                </Tooltip>
              ))}
            </HStack>
            <HStack justify="center" spacing={4} mb={4}>
              <Link href={project.githubLink} isExternal>
                <FaGithub size={24} />
              </Link>
              <Link href={project.linkedinLink} isExternal>
                <FaLinkedin size={24} />
              </Link>
            </HStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;
