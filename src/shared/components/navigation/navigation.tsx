import { Button } from '@mui/material';

import styles from './navigation.module.scss';

export interface IButton {
    title: string;
    onClick?: () => void;
}
interface INavigation {
    leftButton?: IButton | null;
    rightButton?: IButton | null;
}
const Navigation = ({ leftButton, rightButton }: INavigation) => (
    <div className={styles.container}>
        {leftButton && (
            <Button
                className={styles.button}
                data-testid="left-btn"
                onClick={leftButton?.onClick}
                variant="contained"
                fullWidth
            >
                {leftButton.title}
            </Button>
        )}
        {rightButton && (
            <Button
                className={styles.button}
                data-testid="right-btn"
                onClick={rightButton?.onClick}
                variant="contained"
                fullWidth
            >
                {rightButton.title}
            </Button>
        )}
    </div>
);

export default Navigation;
