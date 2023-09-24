import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import '@fontsource/bree-serif';

export const themeBlue = "#0060DF";
export const themeLightBlue = "#EBF4FF";
export const themeDarkBlue = "#003eaa";
export const themeGrey = "#4a4a4a";
export const themeLightGrey = "#E0E0E0";
export const themeDarkGrey = "#2B1B3C";
export const themePurple = "#9400FF";
export const themeDarkPurple = "#47007A";

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = {
    colors: {
        primary: {
            grey: themeGrey,
            blue: themeBlue,
            lightBlue: themeLightBlue,
            darkBlue: themeDarkBlue,
            darkGrey: themeDarkGrey,
        }
    },
    fonts: {
        heading: 'Bree Serif',
    },
    textStyles: {
        header: {
            fontSize: ["md", "lg", "xl", "2xl"],
            margin: 0
        },
        body: {
            fontSize: ["sm", "md", "lg", "xl"],
            margin: 0,
            color: "primary.white"
        },
        description: {
            fontSize: ["sm", "md", "lg", "xl"]
        },
        caption: {
            fontSize: ["xs", "smaller", "sm", "md"],
            margin: 0,
            color: "primary.darkBlue",
            fontWeight: "500"
        },
        error: {
            fontSize: ["xs", "smaller", "sm", "md"],
            margin: 0,
            color: "primary.white",
            borderBottom: "1px solid red"
        }
    }
}

export default extendTheme({...theme, config});