import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, CardHeader, Heading, Link, Text } from "@chakra-ui/react";


const GetInTouchSection = () => {
    return (
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
                        </Link> and I&apos;d love hear about yours.
                    </Text>
                </CardBody>
            </Card>
        </Box>
    );
}

export default GetInTouchSection;