import {Container, Badge, Link, List, ListItem} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {Title, ProjectImage, Meta} from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
    return (
        <Layout title="Portfolio">
            <Container>
                <Title>
                    Portfolio <Badge>2022</Badge>
                </Title>
                <P>
                    Well, what can I say? You are looking at it! This project is the second version of my personal portfolio that I have made,
                    with the first one being extremely basic. This one has a lot more flair, and feels much more my style, so it has really been a joy to create.
                </P>
                <List ml={4} my={4} fontSize="16">
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

                <ProjectImage src="/images/projects/portfolio_1.png" alt="Portfolio Homepage" />
                <ProjectImage src="/images/projects/portfolio_2.png" alt="Pageception" />
            </Container>
        </Layout>
    )
}

export default Project;