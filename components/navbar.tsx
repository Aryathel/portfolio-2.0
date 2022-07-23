import Logo from "./logo";
import NextLink from "next/link";
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Icon
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { SiGithub } from "react-icons/si";
import type { ReactNode } from "react";

interface LinkItem {
    href: string;
    path: string;
    children: ReactNode
}

const LinkItem = ({ href, path, children }) => {
    let active: boolean;
    if (path.endsWith('/'))  active = path === href+'/';
    else active = path === href;
    const inactiveColor = useColorModeValue('gray.500', 'whiteAlpha.900');
    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? 'glassTeal' : "none"} color={inactiveColor} fontWeight={active ? 800 : 100} >
                {children}
            </Link>
        </NextLink>
    )
}

const NavBar = props => {
    const { path } = props;

    return (
        <Box position="fixed" top={0} as="nav" w="100%" bg={useColorModeValue('#ffffff60', '#20202380')} style={{backdropFilter: 'blur(10px)'}} zIndex={1} {...props}>
            <Container display="flex" p={2} maxW="container.lg" style={{flexWrap: "wrap", textAlign: "center"}} justifyContent="space-between">
                <Flex style={{textAlign: "center"}} mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack direction={{base: 'column', md: 'row'}} display={{base: 'none', md: 'flex'}} width={{base: 'full', md: 'auto'}} alignItems="center" flexGrow={1} mt={{base: 4, nmd: 0}}>
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                    <Link href="https://github.com/Aryathel/portfolio-2.0" bg="none" color={useColorModeValue('gray.500', 'whiteAlpha.900')}>
                        <Icon as={SiGithub} /> Source
                    </Link>
                </Stack>

                <Box flex={1} h={10} style={{textAlign: 'right'}}>
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link} background="none">Home</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link} background="none">Projects</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link} background="none">Posts</MenuItem>
                                </NextLink>
                                <MenuItem as={Link} background="none" href="https://github.com/Aryathel/portfolio-2.0">
                                    View Source
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar;