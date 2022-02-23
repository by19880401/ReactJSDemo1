import React from "react";

import CustomNavLink from "../components/custnavlink";
import {Redirect, Route, Switch} from "react-router-dom";
import News from "./news";
import Message from "./message";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home route component</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <CustomNavLink to="/home/news">News</CustomNavLink>
                        </li>
                        <li>
                            <CustomNavLink to="/home/messages">Messages</CustomNavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path="/home/news" component={News}/>
                            <Route path="/home/messages" component={Message}/>
                        </Switch>
                    </div>
                </div>
            </div>);
    }
}

export default Home;