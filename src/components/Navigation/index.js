import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/RouteNames';
import { startCase } from 'lodash';

const Navigation = () => {
    return (
        <div>
            {Object.entries(ROUTES).map(([routeName, path]) => (
                <Link to={path} key={routeName}>
                    <button>{startCase(routeName)}</button>
                </Link>
            ))}
        </div>
    );
};

export default Navigation;