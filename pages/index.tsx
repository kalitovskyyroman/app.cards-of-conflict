import MainSection from '../src/sections/index/main-section/main-section';
import type { ReactElement } from 'react';
import MenuLayout from '../src/components/layouts/menu-layout/menu-layout';

const Home = () => {
    return (
        <>
            <MainSection />
        </>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <MenuLayout>{page}</MenuLayout>;
};
export default Home;
