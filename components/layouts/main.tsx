import Head from "next/head";
import NavBar from "../navbar";
import NoSsr from "../no-ssr";
import { Box, Container } from "@chakra-ui/react"
import type { ReactElement } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import type { PropsWithChildrenWithRouter } from "../../pages/_app";
import Logo3D from '../3dlogo';
import BackgroundWave from "../background-wave";
import ParticleBackground from "../particle-background";

const Main = ({ children, router }: PropsWithChildrenWithRouter): ReactElement => {
    const isMobile = useMediaQuery(`(max-width: 480px)`)[0];
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Arya Mayfield | Homepage</title>
            </Head>
            
            <ParticleBackground />
            <BackgroundWave />
            <NavBar path={router.asPath} />
            
            <Container maxW = "container.lg" pt={14} mt="50px">
                { isMobile ? undefined : <NoSsr><Logo3D /></NoSsr> }
                {children}
            </Container>
        </Box>
    )
}

export default Main;