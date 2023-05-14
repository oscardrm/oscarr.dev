import { Avatar, Text, Flex, Box } from "@chakra-ui/react";

const AvatarSection = () => {
    return (
        <>
            <Flex align="center" justify="center">
                <Box pt={10}>
                    <Avatar size='2xl' name='Oscar Román' src="assets/avatar.png" />
                </Box>
            </Flex>
            <Flex align="center" justify="center">
                <Box p={8}>
                    <Text
                        fontSize='6xl'
                        fontWeight='bold'
                        fontFamily="heading"
                        letterSpacing=".1em"
                    >
                        Hi, I'm Oscar Roman.
                    </Text>
                </Box>
            </Flex>
        </>
    );
}

export default AvatarSection;