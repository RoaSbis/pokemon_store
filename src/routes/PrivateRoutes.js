import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ROUTES } from './RouteNames';

const PrivateRoutes = ({ component: Component, ...rest }) => {
    const { isAuth } = useSelector((state) => state.LogInPage);

    return (
        <Route 
            {...rest}
            render={(props) => 
            !isAuth ? <Redirect to={ROUTES.START_PAGE} /> : <Component {...props} />
            }
        />
    )
}

export default PrivateRoutes;