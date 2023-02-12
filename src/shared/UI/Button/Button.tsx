import { FC } from 'react';
import { Button as MuiBtn } from '@mui/material';

import styles from './Button.module.scss';

const Button: FC = () => (
    <div className={styles.container}>
        {/*<div className={styles['left-border']} />*/}
        <MuiBtn className={styles.btn} variant="contained">
            Text
        </MuiBtn>
        {/*<div className={styles['right-border']} />*/}
    </div>
);

export default Button;
