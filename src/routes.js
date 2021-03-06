import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import App from './components/app'
import Main from './components/main';
import About from './components/secondary/about-us';
import Subscribe from './components/secondary/subscribe';
import MyPage from './components/secondary/my-page/index';
import {userInfo} from './reducers';
import {connect} from 'react-redux';
import { CookiesProvider, withCookies, Cookies } from "react-cookie";

function requireAuth(nextState, replace) {
    
    const cookies = new Cookies();    
    let loggedIn = false;
    if (cookies.get('token') !== undefined) {
        loggedIn = true;
    }

    if (!loggedIn) {
        replace({
            pathname: '/'
        })
    }
}

const Routes = (
        <div>
            <Route path="/" component={App}>
                <IndexRoute component={Main}/>
                <Route path="/about" component={About}/>
                <Route path="/subscribe" component={Subscribe}/>
                <Route path="/myPage" component={MyPage} onEnter={requireAuth}/>
            </Route>
        </div>
    )

export default Routes