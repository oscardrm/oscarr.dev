import { Avatar, Text, Flex, Box } from "@chakra-ui/react";
export default function AvatarComponent() {
    return (
        <Flex alignItems='center'>
            <Box pt={10}>
            <Avatar size='3xl' name='Oscar Román' src="assets/avatar.png" />
            </Box>
            <Box p={8}>
                <Text
                    fontSize='6xl'
                    fontWeight='bold'
                    fontFamily="heading"
                    letterSpacing=".1em"
                    className='color-changing-gradient-text'
                    >
                    Hi there!
                </Text>
            </Box>
        </Flex>
    );
}