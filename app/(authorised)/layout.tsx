import styles from './layout.module.scss'
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Layout = (props: Props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Layout;