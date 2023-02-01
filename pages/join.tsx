import MainSection from '../src/sections/join/main-section/main-section';
import type { ReactElement } from 'react';
import MenuLayout from '../src/components/layouts/menu-layout/menu-layout';

const Join = () => <MainSection />;

Join.getLayout = function getLayout(page: ReactElement) {
    return <MenuLayout>{page}</MenuLayout>;
};

export default Join;
