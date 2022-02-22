import React from "react";
// react-router-dom从V5升级到V6后, Switch重命名为Routes
import {NavLink, Switch, Route, Redirect} from "react-router-dom";

import About from "../pages/about";
import Home from "../pages/home";
import CustomNavLink from "./custnavlink";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <CustomNavLink className="list-group-item" to="/about">About</CustomNavLink>
                            <CustomNavLink className="list-group-item" to="/home">Home</CustomNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/about" component={About}></Route>
                                    <Route path="/home" component={Home}></Route>
                                    <Redirect to="/home"/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}


export default App;