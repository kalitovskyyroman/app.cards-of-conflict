import { createTheme } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

import colors from './colors.module.scss';

const buttonStyles: OverridesStyleRules = {
    root: {
        color: colors['soft-black'],
        backgroundColor: colors['soft-white'],
        borderRadius: '30px',
        padding: '8px 24px',
        boxShadow: `
            -7px 1px 1px 1px ${colors['chromatic-red']}, 
            7px -1px 1px 1px ${colors['chromatic-blue']}
        `,
        ':hover': {
            color: colors['soft-white'],
            backgroundColor: colors['soft-black'],
            boxShadow: `
                7px -1px 1px 1px ${colors['chromatic-blue']},
                -7px 1px 1px 1px ${colors['chromatic-red']}
            `,
        },
        ':focus': {
            color: colors['soft-white'],
            backgroundColor: colors['soft-black'],
            boxShadow: `
                7px -1px 1px 1px ${colors['chromatic-blue']},
                -7px 1px 1px 1px ${colors['chromatic-red']}
            `,
        },
    },
};

const theme = createTheme({
    palette: {
        primary: {
            main: colors['soft-black'],
        },
        secondary: {
            main: '#19857b',
        },
    },
    typography: {
        fontFamily: 'Comfortaa',
    },
    components: {
        MuiButton: {
            styleOverrides: buttonStyles,
        },
    },
});

export default theme;
