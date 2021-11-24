import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { startCase } from 'lodash';

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../../routes/RouteNames';

import { useLogout } from '../../hooks';

import styles from './styles.module.scss'


const Navigation = () => {
    const handleLogout = useLogout()
    
    const {isAuth} = useSelector(state => state.LogInPage)

    return (
        <div>
            {!isAuth ? 
                <div className={styles.wrapper}>
                    <div>

                    </div>
                    <div>
                        <Link to={PUBLIC_ROUTES.REGISTRATION_PAGE}><button className={styles.button}>Registration</button></Link>
                        <Link to={PUBLIC_ROUTES.LOG_IN_PAGE}><button className={styles.button}>Log in</button></Link>
                    </div>
                </div>
                : 
                <div className={styles.wrapper}>
                    <div className={styles.navWrapper}>
                        {Object.entries(PRIVATE_ROUTES).map(([routeName, path]) => (
                            <Link to={path} key={routeName}>
                                <button className={styles.button}>{startCase(routeName)}</button>
                            </Link>
                        ))}
                    </div>
                    <div>
                        <button className={styles.button} onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Navigation;