import { useRouter } from 'next/router';
import Navigation from '../../../components/navigation/navigation';
import CreateForm from '../create-form/create-form';
import PagesEnum from '../../../enums/pages-enum';

import styles from './main-section.module.scss';

const MainSection = () => {
    const router = useRouter();

    return (
        <div>
            <div className={styles['form-container']}>
                <CreateForm />
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

export default MainSection;
