import React from "react";
import { Box, Icon, Text, Wrap, WrapItem } from "@chakra-ui/react";
import SkillsInterface from "./skillsArray";

interface SkillSectionProps {
    arrayTools: SkillsInterface[];
}

const SkillSection = ({ arrayTools }: SkillSectionProps) => {
    return (
        <Box p={4}>
            <Wrap>
                {arrayTools.map((skill, index) => (
                    <WrapItem key={skill.name}>
                        <Box display="flex" alignItems="center">
                            <Icon as={skill.icon} boxSize={skill.boxSize} color={skill.color} mr={skill.mr} />
                            <Text mr={4}>{skill.name}</Text>
                        </Box>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    );
};

export default SkillSection;
