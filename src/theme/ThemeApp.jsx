import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";

export const ThemeApp = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={ theme }>
                <CssBaseline/>
                { children }
            </ThemeProvider>
        </>
    )
};
