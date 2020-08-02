import React, {Component} from 'react';
import {fbase} from "../../fbase";
import '../../scss/partials/_adminPanel.scss';

class AdminPanel extends Component {

    constructor(props){
        super(props);
        this.state = {
            recipes: [],
            recipe : {
                title: "",
                category: "",
                ingredients: "",
                preparation: "",
                image: ""
            },
        };
    };

    handleChange = (event) => {

        let newRecipe = {
            ...this.state.recipe,
            [event.target.name]: event.target.value
        };
        this.setState({
            recipe: newRecipe
        });
    };

    addNewRecipe = (event) => {
        event.preventDefault();

        let newRecipe = { ...this.state.recipe };

        this.setState({
          recipes: [...this.state.recipes, newRecipe],
            recipe: {
                title: "",
                category: "",
                ingredients: "",
                preparation: "",
                image: ""
            },
      });
    };

    render() {
        return (
            <div className="adminPanel">
                <h2>Panel Administratora</h2>
                <form className='form-group' onSubmit={this.addNewRecipe}>
                    <input type="text" placeholder="Tytuł przepisu" id="title" name="title" className='form-control'
                           onChange={this.handleChange} value={this.state.recipe.title}/>
                    <input type="text" placeholder="Kategoria" id="category" name="category" className='form-control'
                           onChange={this.handleChange} value={this.state.recipe.category}/>
                    <textarea placeholder="Składniki" id="ingredients" name="ingredients" className='form-control'
                              onChange={this.handleChange} value={this.state.recipe.ingredients}/>
                    <textarea placeholder="Sposób przygotowania" id="preparation" name="preparation" className='form-control'
                              onChange={this.handleChange} value={this.state.recipe.preparation}/>
                    <input type="text" placeholder="Zdjęcie" id="image" name="image" className='form-control'
                           onChange={this.handleChange} value={this.state.recipe.image}/>
                    <button type="submit" className='btn-add'>Dodaj</button>
                </form>
            </div>
        );
    }
}

export default AdminPanel;