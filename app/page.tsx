'use client'
import { Flex, Text } from "@chakra-ui/react";
import AvatarComponent from "./components/avatar/avatarComponent";
import LinksSectionComponent from "./components/links-section/LinksSection";

const Home = () => {
  return (
    <>
      <AvatarComponent />
      <Flex align="center" justify="center">
        <Text fontSize='4xl'>YOU CAN FIND ME HERE.</Text>
      </Flex>
      <LinksSectionComponent />
    </>
  )
}
export default Home;