import classNames from 'classnames';
import { Link, NavLink } from '@remix-run/react';
import { ROUTES } from '~/router/config';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Link to="/" className={styles.logo}></Link>
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: isActive })
                    }
                >
                    Sheet
                </NavLink>
                <NavLink
                    to={ROUTES.open.to()}
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: isActive })
                    }
                >
                    Open
                </NavLink>
                <NavLink
                    to={ROUTES.save.to()}
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: isActive })
                    }
                >
                    Save
                </NavLink>
                <NavLink
                    to={ROUTES.about.to()}
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: isActive })
                    }
                >
                    About
                </NavLink>
            </div>
        </div>
    );
};
