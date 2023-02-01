import { ReactElement } from 'react';
import MenuLayout from '../src/components/layouts/menu-layout/menu-layout';
import MainSection from '../src/sections/create/main-section/main-section';

const Create = () => <MainSection />;

Create.getLayout = function getLayout(page: ReactElement) {
    return <MenuLayout>{page}</MenuLayout>;
};

export default Create;
