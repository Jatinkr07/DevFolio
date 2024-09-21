/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  Grid,
  Image,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

// Import SVGs as URLs
import CPlusIconUrl from "../assets/cpp3-svgrepo-com.svg";
import HtmlIconUrl from "../assets/html-5-svgrepo-com.svg";
import CssIconUrl from "../assets/css-3-svgrepo-com.svg";
import JavaScriptIconUrl from "../assets/javascript-svgrepo-com.svg";
import ReactIconUrl from "../assets/react-javascript-js-framework-facebook-svgrepo-com.svg";
import ReduxIconUrl from "../assets/redux-svgrepo-com.svg";
import TailwindIconUrl from "../assets/tailwind-svgrepo-com.svg";
import ChakraIconUrl from "../assets/icons8-chakra-ui.svg";
import NodeIconUrl from "../assets/node-js-svgrepo-com (1).svg";
import ExpressIconUrl from "../assets/express-svgrepo-com.svg";
import MongodbIconUrl from "../assets/mongo-svgrepo-com.svg";
import SocketioIconUrl from "../assets/socket-io-svgrepo-com.svg";

const skills = [
  { name: "C++", icon: CPlusIconUrl },
  { name: "HTML", icon: HtmlIconUrl },
  { name: "CSS", icon: CssIconUrl },
  { name: "JavaScript", icon: JavaScriptIconUrl },
  { name: "Redux", icon: ReduxIconUrl },
  { name: "React.js", icon: ReactIconUrl },
  { name: "Tailwind CSS", icon: TailwindIconUrl },
  { name: "Chakra UI", icon: ChakraIconUrl },
  { name: "Node.js", icon: NodeIconUrl },
  { name: "Express.js", icon: ExpressIconUrl },
  { name: "MongoDB", icon: MongodbIconUrl },
  { name: "Socket.io", icon: SocketioIconUrl },
];

const Skills = () => {
  const bgColor = useColorModeValue("white", "gray.700");
  const cardBgColor = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Box id="skills" p={10} bg={bgColor}>
      <Text
        fontSize="3xl"
        fontWeight="bold"
        mb={8}
        color={textColor}
        textAlign="center"
      >
        My Skills
      </Text>
      <Grid
        templateColumns="repeat(auto-fit, minmax(140px, 1fr))" // Adjusted minmax for better responsiveness
        gap={8} // Increased gap for better spacing
        justifyItems="center" // Ensures that items are centered in each grid cell
        alignItems="center" // Vertically center the grid items
      >
        {skills.map((skill) => (
          <Center
            key={skill.name}
            p={4}
            borderRadius="md"
            shadow="md"
            bg={cardBgColor}
            transition="transform 0.3s"
            _hover={{
              bg: useColorModeValue("gray.200", "gray.900"),
              transform: "scale(1.05)",
            }}
            width="100%" // Ensures full width for each grid cell
            maxW="160px" // Limits the maximum width of each card
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                boxSize="60px" // Maintains consistent icon size
                mb={4} // Increased margin for better spacing
              />
              <Text fontSize="lg" color={textColor}>
                {skill.name}
              </Text>
            </Box>
          </Center>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
