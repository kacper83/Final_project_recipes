import React from "react";
import { Link } from 'react-router-dom';
import '../../scss/partials/_recipes.scss';

const Recipes = ({ filter, recipes, changeFilter }) => (
    <div className="recipes">
        <h1>Przepisy</h1>
        <select value={filter} onChange={ changeFilter }>
            <option>wszystkie</option>
            <option>zupa</option>
            <option>danie główne</option>
            <option>deser</option>
            <option>ciasto</option>
        </select>
        <ul>
            { recipes.map(({ title }) =>
                <li key={title}>
                    <Link key={title}>{title}</Link>

                </li>) }
        </ul>
    </div>
);

export default Recipes;
