import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: props => ({
        body: {
            bg: mode('#e3e3ff', '#202023')(props),
            fontSize: ["1rem", "1.1rem", "1.3rem"],
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            },
            'section-label': {
                textDecoration: 'underline',
                fontSize: 16,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 2,
                marginTop: 3,
                marginBottom: 4,
            }
        },
        baseStyle: props => ({
            scrollMarginTop: 20,
        })
    },
    Link: {
        baseStyle: props => ({
            color: mode('#f2ce76', '#ff63c3')(props),
            textUnderlineOffset: 3,
            backgroundColor: 'rgba(96, 94, 169, 0.6)',
            borderRadius: 4,
            paddingX: 1
        })
    }
}

const fonts = {
    heading: "'M PLUS ROUNDED 1c'"
}

const colors = {
    glassTeal: '#88cca'
}

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components, colors, fonts });

export default theme;