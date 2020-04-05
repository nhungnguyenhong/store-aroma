import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./App.css";

import Default from "./components/Default/Default";
import About from "./components/About/About";
import Navbar from "./components/Navigation/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";


class App extends Component {

    render() {
        return (
            <div className={classes.App}>
                <div className={classes.Container}>
                    <Navbar />
                    <Switch>
                        <Route path="/shop" component={ProductList} />
                        <Route path="/About" component={About} />
                        <Route component={Default} />
                    </Switch>
                </div>
            </div>
        );
    }
}
export default App;
