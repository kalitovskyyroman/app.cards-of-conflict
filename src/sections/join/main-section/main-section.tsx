import { useRouter } from 'next/router';
import Navigation from '../../../components/navigation/navigation';
import JoinForm from '../join-form/join-form';
import PagesEnum from '../../../enums/pages-enum';

import styles from './main-section.module.scss';

const MainSection = () => {
    const router = useRouter();

    return (
        <div>
            <div className={styles['form-container']}>
                <JoinForm />
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
        </div>
    );
};

export default MainSection;
