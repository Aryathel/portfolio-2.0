import NextLink from "next/link";
import { Container, Box, Heading, Image, AspectRatio, useColorModeValue, Button, Link, SimpleGrid, ListItem, List } from "@chakra-ui/react";
import Section from "../components/section"
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import type { ReactElement } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Icons from "../components/icons";
import { SiCsharp, SiRust, SiPython, SiJavascript, SiCplusplus, SiJava, SiAiohttp, SiAmazonaws, SiAnaconda, SiArchlinux, SiArduino, SiAtlassian, SiAtom, SiBattledotnet, SiBlender, SiCodefactor, SiCrunchyroll, SiCss3, SiCurseforge, SiDialogflow, SiDiscord, SiDjango, SiDocker, SiDotnet, SiDungeonsanddragons, SiElectron, SiEpicgames, SiExpress, SiFlask, SiGit, SiGithub, SiGitlab, SiGooglecloud, SiGoogle, SiGraphql, SiHeroku, SiHtml5, SiInkscape, SiInstagram, SiIntellijidea, SiJira, SiJson, SiLinkedin, SiTwitch, SiTwitter, SiLua, SiMarkdown, SiWindows, SiMicrosoftexcel, SiMicrosoftword, SiMinecraft, SiMongodb, SiMysql, SiNamecheap, SiNextdotjs, SiObsstudio, SiOculus, SiOpencv, SiOpengl, SiOpera, SiOrigin, SiOsu, SiPandas, SiPihole, SiPostgresql, SiPostman, SiPowershell, SiPrettier, SiPycharm, SiPypi, SiRabbitmq, SiRainmeter, SiRaspberrypi, SiReact, SiReadthedocs, SiSelenium, SiSnapchat, SiSqlite, SiSquare, SiStackoverflow, SiSteam, SiThreedotjs, SiTrello, SiTypescript, SiUbuntu, SiUnity, SiVisualstudio, SiVisualstudiocode, SiWebgl, SiWebtoon, SiYoutube } from "react-icons/si";
import ScrollLink from "../components/scroll-link";
import IconButtonLink from "../components/icon-button";

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
                        I am a 24-year old software engineer who was born and raised in Phoenix, Arizona. I have been pursing programming as a hobby for more than 6 years, and I have been
                        professionally writing code for over 5 years. I have primarily worked in C# and Python, but have a significant variety of experience in other languages as well (see 
                        the <ScrollLink href="#skills-and-experience">Skills & Experience</ScrollLink> section below). I have always enjoyed the thrill have being able to constantly push 
                        myself to learn new things and tackle new challenges and projects.
                    </Paragraph>
                    <Paragraph style={{marginBottom: 4}}>
                        One of my biggest driving
                        inspirations for programming has been my passion for video games. I play a significant variety of games, and my experience with those games and the communities they foster has led
                        me to pursue a career in the software engineering field in the video game space. I was an active leader of the Esports Club at the University of Arizona during my time there,
                        including helping to propose, plan, and bring to fruition the current varsity esports program and arena they have today.
                    </Paragraph>
                    <Paragraph style={{marginBottom: 4}}>
                        Some of my favorite games include <Icons.DestinyButton />, <Icons.ApexLegendsButton />, <Icons.OsuButton />, <Icons.TerrariaButton />, <Icons.MinecraftButton />, <Icons.FFXIVButton />, <Icons.SWTORButton />
                        , <Icons.TM2020Button />, and more. Beyond this, I also
                        hold a deep love for all things "nerdy". Whether it be Star Wars, anime, fantasy novels, you name it, I am probably excited about it.
                    </Paragraph>
                    <Paragraph>
                        As a final note to the introduction of, well.. me, I would be remiss if I did not talk about my identity. I am a proud <Icons.TransgenderFlagButton>transgender</Icons.TransgenderFlagButton> woman,
                        I am very proud of how far I have come on this journey, and I am looking forward to what the road holds ahead.
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
                        Won the <Link href="https://www.modularmining.com/" target="_blank">Modular Mining</Link> challenge category of Hack Arizona.
                    </BioSection>
                    <BioSection>
                        <BioYear>January 2020</BioYear>
                        Won the FLY.me challenge category of <Link href="https://hack-arizona.devpost.com/" target="_blank">Hack Arizona</Link>.
                    </BioSection>
                    <BioSection>
                        <BioYear>Spring 2020</BioYear>
                        Worked for several months at FLY as an intern before the company closed its doors as a result of the Covid-19 pandemic.
                    </BioSection>
                    <BioSection>
                        <BioYear>Summer 2020 - Summer 2021</BioYear>
                        Worked for Space Productions (now called <Link href="https://www.spacetime.gg/" target="_blank">Spacetime Strategies</Link>) on Discord community management tools for 
                        companies like <Link href="https://www.coolermaster.com/" target="_blank">Cooler Master</Link> and <Link href="https://msi.com/" target="_blank">MSI</Link>.
                    </BioSection>
                    <BioSection>
                        <BioYear>Fall 2021</BioYear>
                        Worked on the <Link href="https://battlefy.com/msi-student/msi-student-radiant-cup-spring-split-2/603ac347f9963411ea68f10e/info?infoTab=details" target="_blank">MSI Student Radiant Cup Valorant</Link> tournament as a graphics operator on the broadcast team.
                    </BioSection>
                    <BioSection>
                        <BioYear>August 2021 - May 2022</BioYear>
                        Unity Game Developer for the <Link href="https://ischool.arizona.edu/xrg-lab" target="_blank">Extended Reality and Games Lab</Link> at the University of Arizona, partnering with the Department of Veterans Affairs to research the viability of a virtual reality
                        game being used as a clinical treatment for cognitive impairment.
                    </BioSection>
                    <BioSection>
                        <BioYear>September 2022 - Present</BioYear>
                        Software Engineer for <Link href="https://www.oppc.com/" target="_blank">OnePoint Patient Care</Link> on their integrations team. Built varied healthcare data integrations, applications, and solutions across a variety of areas of the business.
                        This includes full development cycle work, from planning, designing & architecting, proof-of-concepts, development, deployment, post-deployment support, and maintenance.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title" id="skills-and-experience">
                        Skills/Experience
                    </Heading>
                    <Paragraph>
                        A collection of a lot of the programming languages, development stacks, and other technologies I have used. Not all of these are relevant to just programming.
                    </Paragraph>
                    <SimpleGrid spacing={5} columns={[1, 1, 2, 2, 3]}>
                        <Box>
                            <Heading as="h5" variant="section-label">
                                Editors
                            </Heading>
                            <List>
                                <ListItem>
                                    <IconButtonLink href="https://atom.io/" icon={SiAtom}>
                                        Atom
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.jetbrains.com/idea/" icon={SiIntellijidea}>
                                        IntelliJ IDEA
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.jetbrains.com/pycharm/" icon={SiPycharm}>
                                        Pycharm
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://visualstudio.microsoft.com/" icon={SiVisualstudio}>
                                        Visual Studio
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://code.visualstudio.com/" icon={SiVisualstudiocode}>
                                        Visual Studio Code
                                    </IconButtonLink>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Heading as="h5" variant="section-label">
                                Frameworks/Libraries
                            </Heading>
                            <List>
                                <ListItem>
                                    <IconButtonLink href="https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet" icon={SiDotnet}>
                                        .NET (C#)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://docs.aiohttp.org/en/stable/" icon={SiAiohttp}>
                                        AIOHTTP (Python)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.djangoproject.com/" icon={SiDjango}>
                                        Django (Python)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.electronjs.org/" icon={SiElectron}>
                                        Electron (NodeJS)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.expressjs.com/" icon={SiExpress}>
                                        Express (NodeJS)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://flask.palletsprojects.com/en/2.1.x/" icon={SiFlask}>
                                        Flask (Python)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://nextjs.org/" icon={SiNextdotjs}>
                                        NextJS (NodeJS)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://opencv.org/" icon={SiOpencv}>
                                        OpenCV
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://opengl.org/" icon={SiOpengl}>
                                        OpenGL
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://pandas.pydata.org/" icon={SiPandas}>
                                        Pandas (Python)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://prettier.io/" icon={SiPrettier}>
                                        Prettier (NodeJS)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.rabbitmq.com/" icon={SiRabbitmq}>
                                        RabbitMQ
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.reactjs.org/" icon={SiReact}>
                                        ReactJS (NodeJS)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.selenium.dev/" icon={SiSelenium}>
                                        Selenium (Python)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.sqlite.org/" icon={SiSqlite}>
                                        SQLite
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://threejs.org/" icon={SiThreedotjs}>
                                        ThreeJS
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API" icon={SiWebgl}>
                                        WebGL
                                    </IconButtonLink>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Heading as="h5" variant="section-label">
                                Hobbies
                            </Heading>
                            <List>
                                <ListItem>
                                    <IconButtonLink href="https://us.shop.battle.net/en-us" icon={SiBattledotnet}>
                                        Battle.net
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.crunchyroll.com/" icon={SiCrunchyroll}>
                                        Crunchyroll
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.curseforge.com/" icon={SiCurseforge}>
                                        CurseForge
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://dnd.wizards.com/" icon={SiDungeonsanddragons}>
                                        Dungeons & Dragons
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.epicgames.com/site/" icon={SiEpicgames}>
                                        Epic Games
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://minecraft.net/" icon={SiMinecraft}>
                                        Minecraft
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.origin.com/" icon={SiOrigin}>
                                        Origin
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://osu.ppy.sh/" icon={SiOsu}>
                                        Osu!
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://steampowered.com/" icon={SiSteam}>
                                        Steam
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.webtoons.com/" icon={SiWebtoon}>
                                        Webtoon
                                    </IconButtonLink>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Heading as="h5" variant="section-label">
                                Languages
                            </Heading>
                            <List>
                                <ListItem>
                                    <IconButtonLink href="https://docs.microsoft.com/en-us/dotnet/csharp/" icon={SiCsharp}>
                                        C#
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://cplusplus.com/" icon={SiCplusplus}>
                                        C++
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://developer.mozilla.org/en-US/docs/Web/CSS" icon={SiCss3}>
                                        CSS 3
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" icon={SiHtml5}>
                                        HTML 5
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://dev.java/" icon={SiJava}>
                                        Java
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.javascript.com/" icon={SiJavascript}>
                                        JavaScript
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.json.org/" icon={SiJson}>
                                        JSON
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.lua.org/" icon={SiLua}>
                                        Lua
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.markdownguide.org/" icon={SiMarkdown}>
                                        Markdown
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.python.org/" icon={SiPython}>
                                        Python
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.rust-lang.org/" icon={SiRust}>
                                        Rust
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.typescriptlang.org/" icon={SiTypescript}>
                                        TypeScript
                                    </IconButtonLink>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Heading as="h5" variant="section-label">
                                Operating Systems
                            </Heading>
                            <List>
                                <ListItem>
                                    <IconButtonLink href="https://archlinux.org/" icon={SiArchlinux}>
                                        Arch Linux
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.arduino.cc/" icon={SiArduino}>
                                        Arduino
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="http://www.raspbian.org/" icon={SiRaspberrypi}>
                                        Raspbian
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://ubuntu.com/" icon={SiUbuntu}>
                                        Ubuntu
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.microsoft.com/windows/" icon={SiWindows}>
                                        Windows
                                    </IconButtonLink>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Heading as="h5" variant="section-label">
                                Platforms
                            </Heading>
                            <List>
                                <ListItem>
                                    <IconButtonLink href="https://discord.gg/" icon={SiDiscord}>
                                        Discord
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://github.com/" icon={SiGithub}>
                                        GitHub
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://gitlab.com/" icon={SiGitlab}>
                                        GitLab
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://heroku.com/" icon={SiHeroku}>
                                        Heroku
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://instagram.com/" icon={SiInstagram}>
                                        Instagram
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://linkedin.com/" icon={SiLinkedin}>
                                        LinkedIn
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.oculus.com/experiences/" icon={SiOculus}>
                                        Oculus
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.snapchat.com/" icon={SiSnapchat}>
                                        Snapchat
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://stackoverflow.com/" icon={SiStackoverflow}>
                                        Stack Overflow
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://trello.com/" icon={SiTrello}>
                                        Trello
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.twitch.tv/" icon={SiTwitch}>
                                        Twitch
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.twitter.com/" icon={SiTwitter}>
                                        Twitter
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.youtube.com/" icon={SiYoutube}>
                                        Youtube
                                    </IconButtonLink>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Heading as="h5" variant="section-label">
                                Services
                            </Heading>
                            <List>
                                <ListItem>
                                    <IconButtonLink href="https://aws.amazon.com/" icon={SiAmazonaws}>
                                        AWS (EC2, RDS)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.anaconda.com/" icon={SiAnaconda}>
                                        Anaconda (Python)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.atlassian.com/" icon={SiAtlassian}>
                                        Atlassian
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.codefactor.io/" icon={SiCodefactor}>
                                        CodeFactor
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://cloud.google.com/dialogflow/docs" icon={SiDialogflow}>
                                        Dialogflow
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://cloud.google.com/" icon={SiGooglecloud}>
                                        Google Cloud
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://google.com/" icon={SiGoogle}>
                                        Google Services
                                        <br />
                                        (Sheets, Docs, etc.)
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://jira.com/" icon={SiJira}>
                                        Jira
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://namecheap.com/" icon={SiNamecheap}>
                                        Namecheap
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://pypi.org//" icon={SiPypi}>
                                        PyPi
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://readthedocs.org/" icon={SiReadthedocs}>
                                        Read the Docs
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://squareup.com/" icon={SiSquare}>
                                        Square
                                    </IconButtonLink>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Heading as="h5" variant="section-label">
                                Software
                            </Heading>
                            <List>
                                <ListItem>
                                    <IconButtonLink href="https://www.blender.org/" icon={SiBlender}>
                                        Blender
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.docker.com/" icon={SiDocker}>
                                        Docker
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.microsoft.com/microsoft-365/excel" icon={SiMicrosoftexcel}>
                                        Excel
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://git-scm.com/" icon={SiGit}>
                                        Git
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://graphql.org/" icon={SiGraphql}>
                                        GraphQL
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://inkscape.org/" icon={SiInkscape}>
                                        Inkscape
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.mongodb.com/" icon={SiMongodb}>
                                        MongoDB
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.mysql.com/" icon={SiMysql}>
                                        MySQL
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.obsproject.com/" icon={SiObsstudio}>
                                        OBS Studio
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.opera.com/gx/" icon={SiOpera}>
                                        Opera GX
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://pi-hole.net/" icon={SiPihole}>
                                        Pi-hole
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.postgresql.org/" icon={SiPostgresql}>
                                        PostgreSQL
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.postman.com/" icon={SiPostman}>
                                        Postman
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://docs.microsoft.com/en-us/powershell/" icon={SiPowershell}>
                                        Powershell
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.rainmeter.net/" icon={SiRainmeter}>
                                        Rainmeter
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://unity.com/" icon={SiUnity}>
                                        Unity
                                    </IconButtonLink>
                                </ListItem>
                                <ListItem>
                                    <IconButtonLink href="https://www.microsoft.com/microsoft-365/word" icon={SiMicrosoftword}>
                                        Word
                                    </IconButtonLink>
                                </ListItem>
                            </List>
                        </Box>
                    </SimpleGrid>
                </Section>
                
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        My Hobbies/Likes
                    </Heading>
                    <Paragraph>Video Games, Programming, Hiking, Manga/Anime, Food, LGBTQ+ Pride</Paragraph>
                </Section>

                <Section delay={0.5}>
                    <Heading as="h3" variant="section-title">
                        Links
                    </Heading>
                    <List>
                        <ListItem>
                            <IconButtonLink href="https://github.com/Aryathel" colorScheme="teal" icon={SiGithub} fontSize={18} fontWeight={400}>
                                Aryathel
                            </IconButtonLink>
                        </ListItem>
                        <ListItem id="discord">
                            <IconButtonLink href="#" colorScheme="teal" icon={SiDiscord} fontSize={18} fontWeight={400}>
                                Aryathel#0310
                            </IconButtonLink>
                        </ListItem>
                        <ListItem>
                            <IconButtonLink href="https://www.linkedin.com/in/arya-mayfield-00a99719b/" colorScheme="teal" icon={SiLinkedin} fontSize={18} fontWeight={400}>
                                Arya Mayfield
                            </IconButtonLink>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page;