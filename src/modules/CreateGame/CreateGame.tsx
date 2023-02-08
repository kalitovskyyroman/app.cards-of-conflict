import { useRouter } from 'next/router';
import { FC } from 'react';
import CreateGameForm from './components/CreateGameForm/CreateGameForm';
import { Navigation, PagesEnum } from '../../shared';

import styles from './CreateGame.module.scss';
const CreateGame: FC = () => {
    const router = useRouter();

    return (
        <div>
            <div className={styles['form-container']}>
                <CreateGameForm />
            </div>
            <Navigation
                leftButton={{
                    title: 'назад',
                    onClick: () => {
                        router.push(PagesEnum.Home);
                    },
                }}
                rightButton={{
                    title: 'створити',
                    onClick: () => {
                        router.push(PagesEnum.Rick);
                    },
                }}
            />
        </div>
    );
};

export default CreateGame;
