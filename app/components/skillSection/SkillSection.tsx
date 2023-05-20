import React from "react";
import { Box, Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, Text, Wrap, WrapItem } from "@chakra-ui/react";
import SkillsInterface, { backSkillsArray, frontSkillsArray } from "./skillsArray";

interface SkillSectionProps {
    arrayTools: SkillsInterface[];
}

const SkillsInfo = ({ arrayTools }: SkillSectionProps) => {
    return (
        <Box p={4} >
            <Wrap>
                {arrayTools.map((skill) => (
                    <WrapItem key={skill.name}>
                        <Box display="flex">
                            <Icon as={skill.icon} boxSize={skill.boxSize} color={skill.color} mr={skill.mr} />
                            <Text mr={4}>{skill.name}</Text>
                        </Box>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    );
}
const SkillSection = () => {
    return (

        <Box pt={2} >
            <Card>
                <CardHeader pb={-1}>
                    <Heading size='xl'>Skills</Heading>
                </CardHeader>
                <CardBody fontSize='xl'>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Heading size='md' textTransform='uppercase'>
                            Front-End
                        </Heading>
                        <Text pt='2'  textAlign="justify">
                            Over the years I have tried several frameworks and libraries, I will list some.
                        </Text>
                        <SkillsInfo arrayTools={frontSkillsArray} />
                        <Heading size='md' textTransform='uppercase'>
                            Back-End
                        </Heading>
                        <Text pt='2'  textAlign="justify">
                            Over the years I have tried several languages ​​​​and tools. below i show some.
                        </Text>
                        <SkillsInfo arrayTools={backSkillsArray} />
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    );
};

export default SkillSection;
