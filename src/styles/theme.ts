import { createTheme } from '@mui/material';

import colors from './colors.module.scss';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.main,
        },
        secondary: {
            main: '#19857b',
        },
    },
});

export default theme;
