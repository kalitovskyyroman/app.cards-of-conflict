import { FC } from 'react';
import { useRouter } from 'next/router';
import JoinGameForm from './components/JoinGameForm/JoinGameForm';
import styles from './JoinGame.module.scss';
import { Navigation, PagesEnum } from '../../shared';

const JoinGame: FC = () => {
    const router = useRouter();

    return (
        <>
            <div className={styles['form-container']}>
                <JoinGameForm />
            </div>
            <Navigation
                leftButton={{
                    title: 'назад',
                    onClick: () => {
                        router.push(PagesEnum.Home);
                    },
                }}
                rightButton={{
                    title: 'приєднатись',
                    onClick: () => {
                        router.push(PagesEnum.Rick);
                    },
                }}
            />
        </>
    );
};

export default JoinGame;
