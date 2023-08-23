import { extendTheme } from '@chakra-ui/react';

export const themeWhite = "#FAFAFF";
export const themeBlack = "#181818";
export const themeGrey = "#425473";
export const themeLightGrey = "#A6BED2";
export const themeBlue = "#0060DF";
export const themeLightBlue = "#8ED1FC";
export const themeDarkBlue = "#060D3E";
export const themeGreen = "#00D084";
export const themeLightGreen = "#7BDCB5";

const theme = {
    colors: {
        primary: {
            white: themeWhite,
            500: themeBlack,
            black: themeBlack,
            grey: themeGrey,
            lightGrey: themeLightGrey,
            blue: themeBlue,
            lightBlue: themeLightBlue,
            darkBlue: themeDarkBlue,
            green: themeGreen,
            lightGreen: themeLightGreen,
        }
    },
    textStyles: {
        header: {
            fontSize: ["md", "lg", "xl", "2xl"],
            margin: "30px"
        },
        body: {
            fontSize: ["sm", "md", "lg", "xl"],
            margin: "15px",
            color: "primary.white"
        },
        description: {
            fontSize: ["sm", "md", "lg", "xl"]
        },
        caption: {
            fontSize: ["xs", "smaller", "sm", "md"],
            margin: 0,
            color: "primary.black",
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


export default extendTheme(theme);