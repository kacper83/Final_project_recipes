import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Switch,
    Link,
    NavLink
} from 'react-router-dom';
import { Recipe } from "./components/Recipe/Recipe";
import { NotFound} from "./components/NotFound";
import './App.css';



class Main extends Component {
    render() {
        return <h1>Witaj na stronie Bezmleczna Mama!</h1>;
    }
}

class About extends Component {
    render() {
        return <h1>Coś o mnie...</h1>;
    }
}

class Navigation extends Component {
    render() {
        const activeStyle = {
            color: "red",
            fontWeight: "bold"
        };
        return (
            <ul>
                <li><NavLink activeStyle={activeStyle} to="/" exact>Strona główna</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to="/recipe">Przepisy</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to="/about">O mnie</NavLink></li>
            </ul>
        );
    }
}

const App = () => (
    <div className="root">
            <HashRouter>
                <Navigation/>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/recipe' component={Recipe}/>
                    <Route path='/about' component={About}/>
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
    </div>
);

// const Item = ({ recipes }) => (
//     <div className="recipeInfo">
//         <h1>{data.recipes.title}</h1>
//         <p>Składniki</p>
//     </div>
// );

// class App extends Component {
//     state = {
//         select: "all"
//         //ingredient: ""
//     };
//
//     // handleIngredientAdd = e => {
//     //     this.setState({
//     //         ingredient: e.target.value
//     //     })
//     // };
//
//     handleRecipesFilter(option) {
//         this.setState({
//             select: option
//         })
//     }
//
//     recipesList = () => {
//       let recipes = this.props.recipes;
//       switch (this.state.select) {
//           case "soup" :
//               return recipes.map(recipe => <Item recipe = {recipe} key={recipe.id}/>);
//           case "main dish" :
//               recipes = recipes.filter(recipes => recipes.category === "main dish");
//               return recipes.map(recipe => <Item recipe = {recipe} key={recipe.id}/>);
//           case "cake" :
//               recipes = recipes.filter(recipe => recipe.category === "cake");
//               return recipes.map(recipe => <Item recipe = {recipe} key={recipe.id}/>);
//           case "dessert" :
//               recipes = recipes.filter(recipe => recipe.category === "dessert");
//               return recipes.map(recipe => <Item recipe = {recipe} key={recipe.id}/>);
//           break
//           default :
//               return "error"
//       }
//     };
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleRecipesFilter.bind(this, "soup")}>Zupa</button>
//                 <button onClick={this.handleRecipesFilter.bind(this, "main dish")}>Główne danie</button>
//                 <button onClick={this.handleRecipesFilter.bind(this, "cake")}>Ciasto</button>
//                 <button onClick={this.handleRecipesFilter.bind(this, "dessert")}>Deser</button>
//                 {this.recipesList()}
//
//                 {/*<label>*/}
//                 {/*    Wprowadź przepis:*/}
//                 {/*    <input type="text" value={this.state.ingredient} onChange={this.handleIngredientAdd}/>*/}
//                 {/*</label>*/}
//                 {/*<button>Zapisz</button>*/}
//             </div>
//         )
//     }
// }

export default App;
