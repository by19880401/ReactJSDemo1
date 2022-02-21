import React from "react";
// react-router-dom从V5升级到V6后, Switch重命名为Routes
import {NavLink, Routes, Route} from "react-router-dom";

import About from "../pages/about";
import Home from "../pages/home";

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
                            <NavLink className="list-group-item" to="/about">About</NavLink>
                            <NavLink className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Routes>
                                    <Route path="/about" element={<About/>}></Route>
                                    <Route path="/home" element={<Home/>}></Route>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}


export default App;