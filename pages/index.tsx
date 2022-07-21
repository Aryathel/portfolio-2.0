import NextLink from "next/link";
import { Container, Box, Heading, Image, AspectRatio, useColorModeValue, Button, Link, SimpleGrid, ListItem, List, Icon } from "@chakra-ui/react";
import Section from "../components/section"
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import type { ReactElement } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import { GridItem } from "../components/grid-item";
import {
    IoLogoTwitter,
    IoLogoGithub,
    IoLogoDiscord,
    IoLogoLinkedin,
} from "react-icons/io5";
import ScrollLink from "../components/scroll-link";

const Page = (): ReactElement => {
    return (
        <Layout title={undefined}>
            <Container maxW="700px">
                <Box borderRadius="lg" m="auto" w={["200px", "sm"]} bg={useColorModeValue("gray.100", "gray.900")} p={3} mb={6} fontSize="1.2rem" style={{textAlign: "center"}}>
                    Hello World!
                </Box>
                <Box display={{md: "flex"}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Arya Mayfield (She/Her)
                        </Heading>
                        <p>Software Engineer (API | Backend | Game Development)</p>
                    </Box>
                    <Box display="flex" flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} style={{justifyContent: "center"}}>
                        <AspectRatio maxW="100px" width="100px" ratio={1}>
                            <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" display="inline-block" borderRadius="full" src="/images/arya.jpg" alt="Profile image"></Image>
                        </AspectRatio>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title" id="about-me">
                        About Me
                    </Heading>
                    <Paragraph style={{marginBottom: 4}}>
                        I am a 21-year old software engineer who was born and raised in Phoenix, Arizona. I have been pursing programming as a hobby for more than 6 years, and I have been
                        professionally writing code for over 3 years. I have primarily worked in Python, but have a significant variety of experience in other languages as well (see the
                        <ScrollLink href="#skills-and-experience"> Skills & Experience </ScrollLink>
                        section below). I have always enjoyed the thrill have being able to constantly push myself to learn new things and tackle new challenges and projects.
                    </Paragraph>
                    <Paragraph style={{marginBottom: 4}}>
                        One of my biggest driving
                        inspirations for programming has been my passion for video games. I play a significant variety of games, and my experience with those games and the communities they foster has led
                        me to pursue a career in the software engineering field in the video game space. I was an active leader of the Esports Club at the University of Arizona during my time there,
                        including helping to propose, plan, and bring to fruition the current varsity esports program and arena they have today.
                    </Paragraph>
                    <Paragraph style={{marginBottom: 4}}>
                        Some of my favorite games include Destiny2, Apex Legends, Osu!, Terraria, Minecraft, Final Fantasy 14, Star Wars: The Old Republic, Trackmania, and more. Beyond this, I also
                        hold a deep love for all things "nerdy". Whether it be Star Wars, anime, fantasy novels, you name it, I am probably excited about it.
                    </Paragraph>
                    <Paragraph>
                        As a final note to the introduction of, well.. me, I would be remiss if I did not talk about my identity. I am a proud transgender woman, and I am very proud of how far
                        I have come on this journey, and I am looking forward to what the road holds ahead. I will always support my LGBTQ family. If anyone who reads this ever wants to chat, don't be afraid
                        to send me a message on <ScrollLink href="#discord">Discord</ScrollLink> or <ScrollLink href="#twitter">Twitter</ScrollLink>. I am almost always online over there, especially on Discord.
                    </Paragraph>
                    <Box my={4} display="flex">
                        <NextLink href="/projects">
                            <Button rightIcon={<ChevronRightIcon />} m="auto" colorScheme="teal">
                                My Projects
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Timeline
                    </Heading>
                    <BioSection>
                        <BioYear>2000</BioYear>
                        Born in Phoenix, Arizona.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018-2021</BioYear>
                        Freelance development services across a variety of projects, but often relating to developing Discord community tools for a group of people.
                    </BioSection>
                    <BioSection>
                        <BioYear>January 2019</BioYear>
                        Won the Modular Mining challenge category of the Arizona Hackathon.
                    </BioSection>
                    <BioSection>
                        <BioYear>January 2020</BioYear>
                        Won the FLY.me challenge category of the Arizona Hackathon.
                    </BioSection>
                    <BioSection>
                        <BioYear>Spring 2020</BioYear>
                        Worked for several months at FLY as an intern before the company closed its doors as a result of the Covid-19 pandemic.
                    </BioSection>
                    <BioSection>
                        <BioYear>Summer 2020 - Summer 2021</BioYear>
                        Worked for Space Productions (now called Spacetime Strategies) on Discord community management tools for companies like Cooler Master and MSI.
                    </BioSection>
                    <BioSection>
                        <BioYear>Fall 2021</BioYear>
                        Worked on the MSI Student Radiant Cup Valorant tournament as a graphics operator on the broadcast team.
                    </BioSection>
                    <BioSection>
                        <BioYear>August 2021 - Present</BioYear>
                        Unity Game Developer for the Extended Reality and Games Lab at the University of Arizona, partnering with the Department of Veterans Affairs to research the viability of a virtual reality
                        game being used as a clinical treatment for cognitive impairment.
                    </BioSection>
                </Section>
                
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        My Hobbies/Likes
                    </Heading>
                    <Paragraph>Video Games, Programming, Hiking, Manga/Anime, Food, LGBTQ+ Pride</Paragraph>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Links
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/Aryathel" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />} fontSize={18} fontWeight={400}>
                                    Aryathel
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem id="discord">
                            <Link href="https://discord.gg/SuEq5fT9de" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />} fontSize={18} fontWeight={400}>
                                    Aryathel#0310
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/arya-mayfield-00a99719b/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />} fontSize={18} fontWeight={400}>
                                    Arya Mayfield
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem id="twitter">
                            <Link href="https://twitter.com/Aryathel" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />} fontSize={18} fontWeight={400}>
                                    @Aryathel
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page;