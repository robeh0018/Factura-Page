import {createTheme} from "@mui/material";
import {red} from "@mui/material/colors";


export const theme = createTheme({

    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#9cffff',
        },
        error: {
            main: red.A400,
        },
    }
});
