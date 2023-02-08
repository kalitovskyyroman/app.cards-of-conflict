import { FC } from 'react';
import { TextField } from '@mui/material';

import styles from './JoinGameForm.module.scss';

const JoinGameForm: FC = () => (
    <>
        <TextField className={styles.nickname} label="Нікнейм" variant="standard" fullWidth />
        <TextField label="ID Кімнати" variant="standard" fullWidth />
    </>
);

export default JoinGameForm;
