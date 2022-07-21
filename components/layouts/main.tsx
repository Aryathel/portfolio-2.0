import Head from "next/head";
import NavBar from "../navbar";
import NoSsr from "../no-ssr";
import { Box, Container } from "@chakra-ui/react"
import type { ReactElement } from "react";
import type { PropsWithChildrenWithRouter } from "../../pages/_app";
import Logo3D from '../3dlogo';

const Main = ({ children, router }: PropsWithChildrenWithRouter): ReactElement => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Arya Mayfield | Homepage</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW = "700px" pt={14}>
                <NoSsr>
                    <Logo3D />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main;