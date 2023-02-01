import { TextField } from '@mui/material';

import styles from './join-form.module.scss';

const JoinForm = () => (
    <div>
        <TextField className={styles.nickname} label="Нікнейм" variant="standard" fullWidth />
        <TextField label="ID Кімнати" variant="standard" fullWidth />
    </div>
);

export default JoinForm;
