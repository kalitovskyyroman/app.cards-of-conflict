import { TextField } from '@mui/material';

import styles from './CreateGameForm.module.scss';

const CreateGameForm = () => <TextField className={styles.nickname} label="Нікнейм" variant="standard" fullWidth />;

export default CreateGameForm;
