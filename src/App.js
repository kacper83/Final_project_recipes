import React, {Component} from 'react';

import './App.css';

const data = {
    recipes: [
        {
            id: 1,
            title: "Przepis 1",
            category: "dessert"
        },
        {
            id: 2,
            title: "Przepis 2",
            category: "soup"
        },
        {
            id: 3,
            title: "Przepis 3",
            category: "main dish"
        },
        {
            id: 4,
            title: "Przepis 4",
            category: "cake"
        },
        {
            id: 5,
            title: "Przepis 5",
            category: "soup"
        },
        {
            id: 6,
            title: "Przepis 6",
            category: "cake"
        }
    ]

};

const Item = ({ recipes }) => (
    <div className="recipeInfo">
        <h1>{data.recipes.title}</h1>
        <p>Składniki</p>
    </div>
);

class App extends Component {
    state = {
        select: "all"
        //ingredient: ""
    };

    // handleIngredientAdd = e => {
    //     this.setState({
    //         ingredient: e.target.value
    //     })
    // };

    handleRecipesFilter(option) {
        this.setState({
            select: option
        })
    }

    recipesList = () => {
      let recipes = this.props.recipes;
      switch (this.state.select) {
          case "soup" :
              return recipes.map(recipe => <Item recipe = {recipe} key={recipe.id}/>);
          case "main dish" :
              recipes = recipes.filter(recipes => recipes.category === "main dish");
              return recipes.map(recipe => <Item recipe = {recipe} key={recipe.id}/>);
          case "cake" :
              recipes = recipes.filter(recipe => recipe.category === "cake");
              return recipes.map(recipe => <Item recipe = {recipe} key={recipe.id}/>);
          case "dessert" :
              recipes = recipes.filter(recipe => recipe.category === "dessert");
              return recipes.map(recipe => <Item recipe = {recipe} key={recipe.id}/>);
          break
          default :
              return "error"
      }
    };

    render() {
        return (
            <div>
                <button onClick={this.handleRecipesFilter.bind(this, "soup")}>Zupa</button>
                <button onClick={this.handleRecipesFilter.bind(this, "main dish")}>Główne danie</button>
                <button onClick={this.handleRecipesFilter.bind(this, "cake")}>Ciasto</button>
                <button onClick={this.handleRecipesFilter.bind(this, "dessert")}>Deser</button>
                {this.recipesList()}

                {/*<label>*/}
                {/*    Wprowadź przepis:*/}
                {/*    <input type="text" value={this.state.ingredient} onChange={this.handleIngredientAdd}/>*/}
                {/*</label>*/}
                {/*<button>Zapisz</button>*/}
            </div>
        )
    }
}

export default App;
