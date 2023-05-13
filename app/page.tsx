'use client'
import { Box, Flex, Text } from "@chakra-ui/react";
import AvatarComponent from "./components/avatar/avatarComponent";
import LinksSectionComponent from "./components/links-section/LinksSection";

const Home = () => {
  return (
      <Box
        maxW="960px"
        mx="auto"
        px={4}>
        <AvatarComponent />
        <Flex align="center" justify="center">
          <Text fontSize='4xl'>YOU CAN FIND ME HERE.</Text>
        </Flex>
        <LinksSectionComponent />
      </Box>
  )
}
export default Home;