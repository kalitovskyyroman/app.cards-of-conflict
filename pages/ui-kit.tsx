import { FC } from 'react';
import { Button } from '@mui/material';

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
            <Button variant="contained" disabled>
                кнопка
            </Button>
        </div>
    </>
);

export default UiKit;
