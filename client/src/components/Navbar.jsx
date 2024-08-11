/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useDisclosure,
  Stack,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position="fixed"
      width="full"
      p={4}
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      boxShadow="md"
      zIndex={1000}
      transition="background-color 0.3s ease"
    >
      <Flex align="center" justify="space-between">
        <Box fontSize="2xl" fontWeight="bold">
          Jatin Kumar
        </Box>
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
            <Button variant="link" fontSize="lg">
              Home
            </Button>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
            <Button variant="link" fontSize="lg">
              About
            </Button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
            <Button variant="link" fontSize="lg">
              Projects
            </Button>
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} offset={-70}>
            <Button variant="link" fontSize="lg">
              Skills
            </Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
            <Button variant="link" fontSize="lg">
              Contact
            </Button>
          </ScrollLink>
          <Button
            aria-label="Toggle dark mode"
            onClick={toggleColorMode}
            variant="ghost"
            _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.700" }}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
        <IconButton
          aria-label="Open menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      {isOpen && (
        <Stack
          spacing={4}
          mt={4}
          display={{ base: "flex", md: "none" }}
          textAlign="center"
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={onClose}
          >
            <Button variant="link" fontSize="lg">
              Home
            </Button>
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={onClose}
          >
            <Button variant="link" fontSize="lg">
              About
            </Button>
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={onClose}
          >
            <Button variant="link" fontSize="lg">
              Projects
            </Button>
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={onClose}
          >
            <Button variant="link" fontSize="lg">
              Skills
            </Button>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={onClose}
          >
            <Button variant="link" fontSize="lg">
              Contact
            </Button>
          </ScrollLink>
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
};

export default Navbar;
