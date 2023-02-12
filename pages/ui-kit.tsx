import { FC } from 'react';
import { Button, TextField } from '@mui/material';

const UiKit: FC = () => (
    <>
        <h1>UI Kit</h1>
        <div
            style={{
                width: '100%',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Button style={{ marginBottom: '30px' }} variant="contained">
                кнопка
            </Button>
            <Button style={{ marginBottom: '30px' }} variant="contained" disabled>
                кнопка
            </Button>
            <div style={{ backgroundColor: '#0a1520', padding: '40px' }}>
                <TextField label="нікнейм" variant="standard" />
            </div>
        </div>
    </>
);

export default UiKit;
