import { Typography } from '@mui/material';
import {FC} from "react";

import styles from './Title.module.scss';
const Title: FC = () => (
    <Typography className={styles.title} variant="h3">
        карти конфлікту
    </Typography>
);

export default Title;
