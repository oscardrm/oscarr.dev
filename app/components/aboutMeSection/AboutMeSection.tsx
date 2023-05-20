import { Box, Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";


const AboutMeSection = () => {
    return (
        <>
            <Box pt={8} pb={4} textAlign="justify">
                <Text fontSize="2xl">Believer of the only God, husband, father, musician, and passionate about software development.</Text>
            </Box>
            <Box pt={2} pb={2}>
                <Card>
                    <CardHeader pb={-1}>
                        <Heading size='xl'>Abaout me 👨‍💻</Heading>
                    </CardHeader>
                    <CardBody textAlign="justify" fontSize='xl'>
                        <Text pb={2}>
                            I am a passionate software developer, always looking to learn new things and improve my skills.
                            I focus on following good practices to create efficient and effective solutions in my day to day.
                        </Text>
                        <Text>
                            Outside of work, I enjoy being with my family and friends, I love music and I also enjoy singing and playing my guitar a little in my spare time.
                        </Text>
                    </CardBody>
                </Card>
            </Box>
        </>
    );
}

export default AboutMeSection