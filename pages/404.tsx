import NextLink from "next/link";
import {
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text,
} from "@chakra-ui/react";
import type { ReactElement } from "react";
import Layout from "../components/layouts/article";

const NotFound = (): ReactElement => {
    return (
        <Layout title="404 Not Found">
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
        </Layout>
    )
}

export default NotFound;