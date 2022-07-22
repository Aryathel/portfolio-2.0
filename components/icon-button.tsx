import { Button, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import type { ButtonProps } from "@chakra-ui/react";
import type { ReactElement } from "react";
import type { IconType } from "react-icons";

interface IconButton extends ButtonProps {
    icon?: IconType;
}
export const IconButton = (props: IconButton): ReactElement => {
    return (
        <Button leftIcon={(props.icon && (<Icon as={props.icon} />))} variant="ghost" colorScheme={useColorModeValue("pink", undefined)} {...props} />
    );
}

interface IconButtonLink extends IconButton {
    href: string;
    external?: boolean;
}
const IconButtonLink = (props: IconButtonLink): ReactElement => {
    const {href, external = true} = props
    return (
        <Link href={href} target={external ? "_blank" : undefined} bg="none">
            <IconButton {...props} />
        </Link>
    );
}

export default IconButtonLink;