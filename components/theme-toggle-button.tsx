import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Container } from "tsparticles-engine";
import { useState, type Dispatch, type SetStateAction } from "react";

const ThemeToggleButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [container, setContainer]: [Container, Dispatch<SetStateAction<Container>>] = useState();

    const toggleColor = () => {
        toggleColorMode();

        console.log(container);
    }

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div style={{display: 'inline-block'}} key={useColorModeValue('light', 'dark')} initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: 20, opacity: 0}} transition={{duration: 0.2}}>
                <IconButton aria-label='Toggle theme' colorScheme={useColorModeValue('purple', 'orange')} icon={useColorModeValue(<MoonIcon />, <SunIcon />)} onClick={toggleColor}></IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton;