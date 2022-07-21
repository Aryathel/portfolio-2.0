import { ChakraProvider, GridItem } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import { GridItemStyle } from "../components/grid-item";
import theme from "../libs/theme";
import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { Router } from "next/router";
import type { PropsWithChildren } from "react";

export type PropsWithChildrenWithRouter = PropsWithChildren & {
    router?: Router
}

type AppPropsWithLayout = AppProps & {
    Component: NextPage
}

const Website = ({ Component, pageProps, router }: AppPropsWithLayout) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website;