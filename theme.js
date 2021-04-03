import { createMuiTheme } from '@material-ui/core';

const defaultTheme = {
    palette: {
        primary: {
            main: '#7df9ff',
        },
    },
};

export const darkTheme = createMuiTheme({
    ...defaultTheme,
    palette: {
        ...defaultTheme.palette,
        secondary: {
            main: '#202020',
        },
        type: 'dark',
    },
});

export const lightTheme = createMuiTheme({
    ...defaultTheme,
    palette: {
        ...defaultTheme.palette,
        secondary: {
            main: '#CDCDCD',
        },
        type: 'light',
    },
});