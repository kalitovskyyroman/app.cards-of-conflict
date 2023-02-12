import { createTheme, formLabelClasses } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

import colors from './colors.module.scss';
import btnStyles from './overrides/button.module.scss';

const buttonStyles: OverridesStyleRules = {
    root: {
        color: colors['soft-black'],
        backgroundColor: colors['soft-white'],
        borderRadius: '30px',
        padding: '8px 24px',
        textTransform: 'lowercase',
        boxShadow: btnStyles['box-shadow-regular'],
        ':hover': {
            backgroundColor: colors['soft-white'],
            boxShadow: btnStyles['box-shadow-hover'],
        },
        ':focus': {
            boxShadow: btnStyles['box-shadow-focus'],
        },
        ':active': {
            color: colors['soft-white'],
            backgroundColor: colors['soft-black'],
            boxShadow: btnStyles['box-shadow-active'],
        },
        ':disabled': {
            boxShadow: btnStyles['box-shadow-regular'],
            opacity: 0.7,
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
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: colors['soft-white'],
                    [`&.${formLabelClasses.focused}`]: {
                        color: colors['chromatic-blue'],
                    },
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    color: colors['soft-white'],
                    '&:after': {
                        borderColor: colors['chromatic-blue'],
                    },
                    '&:before': {
                        borderColor: colors['soft-white'],
                    },
                    '&&:hover:before': {
                        borderColor: colors['chromatic-blue'],
                    },
                },
            },
        },
    },
});

export default theme;
