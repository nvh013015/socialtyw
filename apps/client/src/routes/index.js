import {Route} from 'react-router-dom';
import Auth from './Auth';
import Signin from './Signin';

const Routes = () => {
    <>
        <Route path="/auth" element={<Auth />} />
        <Route path="/signin" element={<Signin />} />
    </>
}

export default Routes;