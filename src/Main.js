import React, {Component} from "react";
import{
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import TripSummaries from "./tripsummaries";
import Contributors from "./Contributors";
import Contact from "./Contact";
import Donate from "./Donate";
class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/tripsummaries">Trip Summaries</NavLink></li>
                        <li><NavLink to="/contributors">Contributors</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/donate">Donate</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/tripsummaries" component={tripsummaries}/>
                        <Route path="/contributors" component={Contributors}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/donate" component={Donate}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;