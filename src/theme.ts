import { extendTheme, theme } from "@chakra-ui/react";


export default extendTheme({
    styles: {
        global: {
            'html, body': {
                fontFamily: "'Kumbh Sans', 'sans-serif'",
            },
        },
    },
    colors: {
        primary: theme.colors.orange
    }
})