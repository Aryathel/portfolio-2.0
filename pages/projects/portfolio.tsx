import {Container, Badge, Link, List, ListItem, UnorderedList, Heading, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {Title, ProjectImage, Meta} from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import IconButtonLink from "../../components/icon-button";
import { SiThreedotjs } from "react-icons/si";
import Section from "../../components/section";

const Project = () => {
    return (
        <Layout title="Portfolio">
            <Container>
                <Section delay={0.2}>
                    <Title>
                        Portfolio <Badge>2022</Badge>
                    </Title>
                    <P>
                        Well, what can I say? You are looking at it! This project is the second version of my personal portfolio that I have made,
                        with the first one being extremely basic. This one has a lot more flair, and feels much more my style, so it has really been a joy to create.
                        Come of the particular challenges that I had to cross was using
                        <IconButtonLink href="https://threejs.org/" icon={SiThreedotjs} px={2} mx={0} h={7}>ThreeJS</IconButtonLink>
                        to render that very pretty animated model of my logo that you have probably noticed at the top of every page. In case you <i>hadn't</i> noticed, you can also play
                        around with it with your mouse (or finger), by clicking and dragging or scrolling.
                    </P>
                </Section>
                <Section delay={0.4}>
                    <List ml={4} my={4} fontSize={16}>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href="/">
                                https://localhost:8000/ <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>Platform Agnostic</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>NodeJS, React, NextJS, ThreeJS, Chakra UI</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Source Code</Meta>
                            <Link href="https://github.com/Aryathel/portfolio-2.0">
                                https://github.com/Aryathel/portfolio-2.0
                                <ExternalLinkIcon mx="2px" />
                                </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Related Post</Meta>
                            <Link href="/posts/lets-get-serious-about-this">
                                It's about time I start taking this a little more seriously.
                                </Link>
                        </ListItem>
                    </List>
                </Section>
                <Section delay={0.6}>
                    <UnorderedList fontSize={16}>
                        <Heading as="h3" variant="section-title">
                            Features
                        </Heading>
                        <Box ml={10}>
                            <ListItem>
                                Cool logo model animation thingy with ThreeJS.
                            </ListItem>
                            <ListItem>
                                Pages for showcasing projects (like this one).
                            </ListItem>
                            <ListItem>
                                Blog posts, which can be whatever I want them to be.
                            </ListItem>
                        </Box>
                    </UnorderedList>
                    <UnorderedList fontSize={16}>
                        <Heading as="h3" variant="section-title">
                            Planned/In Progress Features
                        </Heading>
                        <Box ml={10}>
                            <ListItem>
                                User login/authentication.
                            </ListItem>
                            <ListItem>
                                Blog post creation page, isolated to my personal account.
                            </ListItem>
                            <ListItem>
                                Ability for users to sign up for email or webhook notifications for a new blog post.
                            </ListItem>
                        </Box>
                    </UnorderedList>
                    <UnorderedList fontSize={16}>
                        <Heading as="h3" variant="section-title">
                            Future Feature Ideas
                        </Heading>
                        <Box ml={10}>
                            <ListItem>
                                Get youtube videos and show them on a page (requires me to get back into making youtube content)
                            </ListItem>
                            <ListItem>
                                Notifications for those videos ^^, just like the blog post notifications.
                            </ListItem>
                            <ListItem>
                                Ability to add project page directly from a github repo (requires some custom markdown processing for getting it to look nice)
                            </ListItem>
                            <ListItem>
                                Ability to add blog posts from a markdown file format instead of having to make its own ``.tsx`` file.
                            </ListItem>
                        </Box>
                    </UnorderedList>
                </Section>
                <Section delay={0.8}>
                    <Heading as="h3" variant="section-title">
                        Gallery
                    </Heading>
                    <ProjectImage src="/images/projects/portfolio_1.png" alt="Portfolio Homepage" />
                    <ProjectImage src="/images/projects/portfolio_2.png" alt="Pageception" />
                </Section>
            </Container>
        </Layout>
    )
}

export default Project;