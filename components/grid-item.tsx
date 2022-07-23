import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import type { ReactElement } from "react";
import type { StaticImageData } from "next/image";

import placeholderThumbnail from "../public/images/logo.png";

interface GridItem {
    children?: ReactElement;
    href: string;
    title: string;
    thumbnail?: string| StaticImageData;
}
/* eslint-disable @typescript-eslint/no-unused-vars */
export const GridItem = ({ children, href, title, thumbnail = placeholderThumbnail }: GridItem): ReactElement => {
    return (
        <Box w="100%" style={{justifyContent: "center"}}>
            <LinkBox cursor="pointer">
                <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" loading="lazy" />
                <LinkOverlay href={href} target="_blank">
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </Box>
    )
}

interface ProjectGridItem {
    children?: ReactElement | string;
    id: string;
    title: string;
    thumbnail: string | StaticImageData;
}
export const ProjectGridItem = ({ children, id, title, thumbnail }: ProjectGridItem): ReactElement => {
    return (
        <Box w="100%" style={{justifyContent: "center"}}>
            <NextLink href={`/projects/${id}`}>
                <LinkBox cursor="pointer">
                    <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" />
                    <LinkOverlay href={`/projects/${id}`} >
                        <Text mt={2} fontSize={20}>
                            {title}
                        </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>{children}</Text>
                </LinkBox>
            </NextLink>
        </Box>
    )
}
/* eslint-enable @typescript-eslint/no-unused-vars */

export const GridItemStyle = (): ReactElement => {
    return (
        <Global styles={
            `.grid-item-thumbnail {
                border-radius: 12px;
            }
            `
        } />
    )
}