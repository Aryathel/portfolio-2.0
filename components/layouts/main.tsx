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
                <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />

                <meta property="og:title" content="About Arya" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://arya-portfolio.vercel.app/" />
                <meta property="og:image" content="https://arya-portfolio.vercel.app/images/arya.jpg" />
                <meta property="og:description" content="A basic 'About Me' portfolio site." />
                <meta name="theme-color" content="#5B4698" />
            </Head>
            
            { !isMobile && (<ParticleBackground />) }
            <BackgroundWave />
            <NavBar path={router.asPath} />
            
            <Container maxW = "container.lg" pt={14} mt="50px">
                { !isMobile && (<NoSsr><Logo3D /></NoSsr>) }
                {children}
            </Container>
        </Box>
    )
}

export default Main;