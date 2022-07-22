import { Image, useColorModeValue } from "@chakra-ui/react";
import { useRef } from "react";

const BackgroundWave = () => {
    const refContainer = useRef();

    return (
        <Image
          src="/images/background-wave.svg"
          position="fixed"
          top={300}
          width="100%"
          height="auto"
          filter={ useColorModeValue("invert(61%) sepia(3%) saturate(4784%) hue-rotate(211deg) brightness(118%) contrast(86%)", "invert(25%) sepia(79%) saturate(613%) hue-rotate(217deg) brightness(97%) contrast(87%)") }
        />
        
    );
}

export default BackgroundWave;