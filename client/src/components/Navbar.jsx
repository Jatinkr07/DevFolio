/* eslint-disable react/display-name */
import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useDisclosure,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll
import { motion } from "framer-motion";

// Memoized component for optimization
const MotionIconButton = React.memo(motion(IconButton));

const Navbar = React.memo(() => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = colorMode === "light" ? "gray.100" : "gray.900";
  const activeLinkColor = colorMode === "light" ? "blue.600" : "cyan.400";

  return (
    <Box
      position="fixed"
      width="full"
      p={4}
      bg={bgColor}
      boxShadow="md"
      zIndex={1000}
      transition="background-color 0.3s ease"
    >
      <Flex align="center" justify="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Jatin Kumar
        </Text>
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {["home", "about", "projects", "skills", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <Button
                variant="link"
                fontSize="lg"
                _hover={{ color: activeLinkColor }}
                _activeLink={{ color: activeLinkColor }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            </ScrollLink>
          ))}
          <Button
            aria-label="Toggle dark mode"
            onClick={toggleColorMode}
            variant="ghost"
            _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.700" }}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
        <MotionIconButton
          aria-label="Open menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </Flex>
      {isOpen && (
        <Stack
          spacing={4}
          mt={4}
          display={{ base: "flex", md: "none" }}
          textAlign="center"
        >
          {["home", "about", "projects", "skills", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={onClose}
            >
              <Button variant="link" fontSize="lg">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            </ScrollLink>
          ))}
          <Button
            aria-label="Toggle dark mode"
            onClick={toggleColorMode}
            variant="ghost"
            _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.700" }}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      )}
    </Box>
  );
});

export default Navbar;
