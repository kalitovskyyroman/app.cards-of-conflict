import { FC } from 'react';
import { useRouter } from 'next/router';
import Title from './components/Title/Title';
import { Navigation, PagesEnum } from '../../shared';

import styles from './SelectGame.module.scss';

const SelectGame: FC = () => {
    const router = useRouter();

    return (
        <div>
            <div className={styles.title}>
                <Title />
            </div>
            <Navigation
                leftButton={{
                    title: 'створити',
                    onClick: () => {
                        router.push(PagesEnum.Create);
                    },
                }}
                rightButton={{
                    title: 'приєднатись',
                    onClick: () => {
                        router.push(PagesEnum.Join);
                    },
                }}
            />
        </div>
    );
};

export default SelectGame;
