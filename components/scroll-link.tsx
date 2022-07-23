import { Link } from "@chakra-ui/react";
import { ReactElement } from "react";


interface ScrollLink {
    children: ReactElement | string;
    href: string;
}

const ScrollLink = ({ children, href }: ScrollLink) => {
    const handleLinkClick = (e) => {
        console.log("caught click");

        if (href.startsWith("#")) href = href.replace('#', '');
        const target = document.getElementById(href);
        console.log(target);
        
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start"});
        }
    }

    return (
        <Link href={href} onClick={handleLinkClick}>
            {children}
        </Link>
    )
}

export default ScrollLink;