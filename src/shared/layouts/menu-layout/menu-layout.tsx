import styles from './menu-layout.module.scss';
import type { ReactNode } from 'react';
const MenuLayout = ({ children }: { children: ReactNode | ReactNode[] }) => (
    <div className={styles.layout}>{children}</div>
);

export default MenuLayout;
