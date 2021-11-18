import { Switch, Route, Redirect } from 'react-router-dom';

import { ROUTES } from './RouteNames'

import StartPageContainer from '../pages/StartPage/container/StartPageContainer';
import LogInPageContainer from '../pages/LogInPage/containers/LogInPageContainer'
import RegistrationPageContainer from '../pages/RegistrationPage/containers/RegistrationPageContainer';
import ProductsPageContainer from '../pages/ProductsPage/containers/ProductsPageContainer';
import ProductPageContainer from '../pages/ProductPage/containers/ProductPageContainer';
import BasketPageContainer from '../pages/BasketPage/containers/BasketPageContainer';
import PersonalPageContainer from '../pages/PersonalPage/containers/PersonalPageContainer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.START_PAGE} component={StartPageContainer}/>
            <Route path={ROUTES.REGISTRATION_PAGE} component={RegistrationPageContainer}/>
            <Route path={ROUTES.LOG_IN_PAGE} component={LogInPageContainer}/>
            <Route path={ROUTES.PRODUCTS_PAGE} component={ProductsPageContainer}/>
            <Route path={ROUTES.PRODUCT_PAGE} component={ProductPageContainer}/>
            <Route path={ROUTES.BASKET_PAGE} component={BasketPageContainer}/>
            <Route path={ROUTES.PERSONAL_PAGE} component={PersonalPageContainer}/>
            <Redirect path='*' to={ROUTES.START_PAGE}/>
        </Switch>
    );
};

export default Routes;