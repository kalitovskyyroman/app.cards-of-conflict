import { FC } from 'react';
import { Button } from '@mui/material';

const UiKit: FC = () => (
    <>
        <h1>UI Kit</h1>
        <div
            style={{ width: '100%', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <Button variant="contained">кнопка</Button>
        </div>
    </>
);

export default UiKit;
