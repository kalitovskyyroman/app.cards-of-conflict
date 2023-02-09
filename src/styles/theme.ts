import { createTheme } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

import colors from './colors.module.scss';

const buttonStyles: OverridesStyleRules = {
    root: {
        color: colors['soft-black'],
        backgroundColor: colors['soft-white'],
        borderRadius: '30px',
        padding: '8px 24px',
        textTransform: 'lowercase',
        boxShadow: `
            -5px 1px 1px 1px ${colors['chromatic-red']}, 
            5px -1px 1px 1px ${colors['chromatic-blue']}
        `,
        ':hover': {
            backgroundColor: colors['soft-white'],
            boxShadow: `
                -9px 1px 1px 1px ${colors['chromatic-red']},
                9px -1px 1px 1px ${colors['chromatic-blue']}
            `,
        },
        ':focus': {
            color: colors['soft-white'],
            backgroundColor: colors['soft-black'],
            boxShadow: `
                5px -1px 1px 1px ${colors['chromatic-blue']},
                -5px 1px 1px 1px ${colors['chromatic-red']}
            `,
        },
        ':active': {
            color: colors['soft-white'],
            backgroundColor: colors['soft-black'],
            boxShadow: `
                -5px 1px 1px 1px ${colors['chromatic-red']},
                5px -1px 1px 1px ${colors['chromatic-blue']}
            `,
        }
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
