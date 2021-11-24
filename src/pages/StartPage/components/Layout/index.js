import { Link } from 'react-router-dom';

import { ROUTES } from '../../../../routes/RouteNames'

const StartPageLayout = () => {
    return (
        <>
            <div>
                <h1>First time on Pokemon strore?</h1>
                <Link to={ROUTES.REGISTRATION_PAGE}><button>Registration</button></Link>
            </div>
            <div>
                <h1>Already have an account</h1>
                <Link to={ROUTES.LOG_IN_PAGE}><button>Log In</button></Link>
            </div>
        </>
    );
};

export default StartPageLayout;