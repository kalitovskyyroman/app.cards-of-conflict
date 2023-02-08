import styles from './layout.module.scss';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => <div className={styles.layout}>{children}</div>;

export default Layout;
