'use client'
import { Box, Flex, Text } from "@chakra-ui/react";
import AvatarSection from "./components/avatarSection/AvatarSection";
import LinksSection from "./components/linksSection/LinksSection";
import SkillSection from "./components/skillSection/SkillSection";
import AboutMeSection from "./components/aboutMeSection/AboutMeSection";
import GetInTouchSection from "./components/getInTouchSection/GetInTouchSection";

const Home = () => {
  return (
    <Box
      maxW="960px"
      mx="auto"
      px={4}>
      <AvatarSection />
      <Flex align="center" justify="center">
        <Text fontSize='4xl'>FIND ME!</Text>
      </Flex>
      <LinksSection />
      <AboutMeSection />
      <SkillSection />
      <GetInTouchSection />
    </Box>
  )
}
export default Home;