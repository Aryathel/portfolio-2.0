import NextLink from "next/link";
import {
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text,
} from "@chakra-ui/react";

const NotFound = () => {
    return (
        <Container centerContent>
            <Heading as="h1">404 Not Found</Heading>
            <Text>This is not the page you are looking for~</Text>
            <Divider my={6} />
            <Box my={6}>
                <NextLink href="/">
                    <Button colorScheme="teal">Return Home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound;