import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';

import { NotFound} from "./components/NotFound";
import RecipesApp from "./components/RecipesFilter";
import About from "./components/Recipe/AboutMe";
import Contact from "./components/Recipe/Contact";
import Footer from "./components/Recipe/Footer";
import './scss/main.scss';
import './scss/partials/_mainPage.scss';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <h1>Witam na mojej stronie.</h1>
                <p>Znajdziesz tutaj informacje dotyczące alergii na mleko oraz przepisy na potrawy bez mleka.</p>
            </div>
        )
    }
}

class Navigation extends Component {
    render() {
        const activeStyle = {
            color: "green",
            fontWeight: "bold"
        };
        return (
            <div className="header">
                    <h1 className="logo">Bezmleczna <span>Dieta</span></h1>
                <div className="nav">
                    <ul>
                        <li><NavLink activeStyle={activeStyle} to="/" exact>Strona główna</NavLink></li>
                        <li><NavLink activeStyle={activeStyle} to="/recipe">Przepisy</NavLink></li>
                        <li><NavLink activeStyle={activeStyle} to="/about">O mnie</NavLink></li>
                        <li><NavLink activeStyle={activeStyle} to="/contact">Kontakt</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

const App = () => (
    <div className="root">
            <HashRouter>
                <Navigation/>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/recipe' component={RecipesApp}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route component={NotFound}/>
                </Switch>
                <footer>{<Footer/>}</footer>
            </HashRouter>
    </div>
);

export default App;
