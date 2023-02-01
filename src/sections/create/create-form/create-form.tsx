import { TextField } from '@mui/material';

import styles from './create-form.module.scss';

const CreateForm = () => <TextField className={styles.nickname} label="Нікнейм" variant="standard" fullWidth />;

export default CreateForm;
