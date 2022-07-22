import Particles from "react-tsparticles";
import { loadFull } from "tsParticles";
import type { Engine, ISourceOptions, Container } from "tsparticles-engine";
import { ReactElement, useRef } from "react";
import { Box } from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";
import BackgroundWave from "./background-wave";


const ParticleBackground = (): ReactElement => {
    const particle = useRef();

    const particlesInit = async (main: Engine) => {
        await loadFull(main);
    }

    const particlesOptions: ISourceOptions = {
        preset: "links",
        fpsLimit: 60,
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        style: {
            position: "fixed",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
        },
        events: {
            resize: true,
        },
        particles: {
            links: {
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
                warp: true,
                color: "#ffffff",
            },
            move: {
                bounce: false,
                direction: "none",
                enable: true,
                speed: 2,
                straight: true,
                out_mode: "out",
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800,
                },
                value: 40,
            },
            opacity: {
                anim: {
                    enable: true,
                    opacity_min: 0.1,
                    speed: 1,
                    sync: false,
                },
                random: true,
            },
            color: {
                value: "#8566d9"
            }
        },
        detectRetina: true,
        responsive: [
            {
                maxWidth: 672,
                options: {
                    particles: {
                        line_linked: {
                            distance: 100,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 400,
                            },
                            value: 40,
                        },
                    }
                }
            },
            {
                maxWidth: 420,
                options: {
                    particles: {
                        line_linked: {
                            distance: 75,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 200,
                            },
                            value: 40,
                        },
                    }
                }
            }
        ],
    }

    return (
        <Particles ref={particle} className="particle-background" init={particlesInit} options={particlesOptions} />
    );
}

export default ParticleBackground;