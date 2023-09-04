import { extendTheme, type ThemeConfig } from '@chakra-ui/react';


export const themeGrey = "#425473";
export const themeBlue = "#0060DF";
export const themeLightBlue = "#8ED1FC";
export const themeDarkBlue = "#060D3E";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = {
    colors: {
        primary: {
            grey: themeGrey,
            blue: themeBlue,
            lightBlue: themeLightBlue,
            darkBlue: themeDarkBlue,
        }
    },
    fonts: {
      heading: 'Bree Serif',
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

export default extendTheme({ ...theme, config });
