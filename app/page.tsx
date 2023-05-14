'use client'
import { Box, Card, CardBody, CardHeader, Flex, Heading, Link, Stack, StackDivider, Text } from "@chakra-ui/react";
import AvatarComponent from "./components/avatarSection/AvatarSection";
import LinksSectionComponent from "./components/linksSection/LinksSection";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import SkillSection from "./components/skillSection/SkillSection";
import { backSkillsArray, frontSkillsArray } from "./components/skillSection/skillsArray";

const Home = () => {
  return (
    <Box
      maxW="960px"
      mx="auto"
      px={4}>
      <AvatarComponent />
      <Flex align="center" justify="center">
        <Text fontSize='4xl'>FIND ME!</Text>
      </Flex>
      <LinksSectionComponent />

      <Box pt={8} pb={4} textAlign="justify">
        <Text fontSize="2xl">Believer of the only God, husband, father, musician, and passionate about software development.</Text>
      </Box>

      <Box pt={2} pb={2}>
        <Card>
          <CardHeader pb={-1}>
            <Heading size='xl'>Abaout me 👨‍💻</Heading>
          </CardHeader>
          <CardBody textAlign="justify">
            <Text fontSize='lg' pb={2}>
              I am a passionate software developer, always looking to learn new things and improve my skills.
              I focus on following good practices to create efficient and effective solutions in my day to day.
            </Text>
            <Text>
              Outside of work, I enjoy being with my family and friends, I love music and I also enjoy singing and playing my guitar a little in my spare time.
            </Text>
          </CardBody>
        </Card>
      </Box>

      <Box pt={2}>
        <Card>
          <CardHeader pb={-1}>
            <Heading size='xl'>Skills</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='md' textTransform='uppercase'>
                  Front-End
                </Heading>
                <Text pt='2' fontSize='lg'>
                  Over the years I have tried several frameworks and libraries, I will list some.
                </Text>
                <SkillSection arrayTools={frontSkillsArray} />
              </Box>
              <Box>
                <Heading size='md' textTransform='uppercase'>
                  Back-End
                </Heading>
                <Text pt='2' fontSize='lg'>
                  Over the years I have tried several languages ​​​​and tools. below i show some.
                </Text>
                <SkillSection arrayTools={backSkillsArray} />
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>

      <Box pt={2} pb={2}>
        <Card>
          <CardHeader pb={-1}>
            <Heading size='xl'>Have a challange for me?</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize='xl' textAlign="justify">
              I occassionally take on new opportunities. <Link
                href='mailto:oscardario.roman@gmail.com'
                color='teal.500'
                className="color-changing-gradient-text"
                isExternal>
                Get in touch<ExternalLinkIcon mx='2px' />
              </Link> and I'd love hear about yours.
            </Text>
          </CardBody>
        </Card>
      </Box>
    </Box>
  )
}
export default Home;