import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";
import thumbPortfolio from "../public/images/thumbPortfolio.png";
import thumbAPIFramework from "../public/images/thumbAPIFramework.png";
import Layout from "../components/layouts/article";

const Projects = () => {
    return (
        <Layout title="Projects">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                Projects
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <ProjectGridItem id="portfolio" title="This Portfolio" thumbnail={thumbPortfolio}>
                            The portfolio/website you are seeing now!
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="apiframework" title="Python API Framework" thumbnail={thumbAPIFramework}>
                            A framework for building API wrappers in Python, using Pydantic for static type checking,
                            featuring both Asynchronous and Synchronous implementations.
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects;