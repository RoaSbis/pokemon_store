import * as logInPageActions from '../pages/LogInPage/actions'
import * as logInPageAPI from '../pages/LogInPage/api'

const apiCallsMapping = (action) => {
    const mapping = {
        [logInPageActions.LOGIN_REQUESTS]: logInPageAPI.PostLogIn,

    }
    return mapping[action.type]
}

export default apiCallsMapping;