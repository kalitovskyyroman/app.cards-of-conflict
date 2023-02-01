import { useRouter } from 'next/router';
import Title from './title/title';
import Navigation from '../../../components/navigation/navigation';
import PagesEnum from '../../../enums/pages-enum';

import styles from './main-section.module.scss';

const MainSection = () => {
    const router = useRouter();

    return (
        <>
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
        </>
    );
};

export default MainSection;
