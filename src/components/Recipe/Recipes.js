import React from "react";

const Recipes = ({ filter, recipes, changeFilter }) => (
    <div>
        <h1>Przepisy</h1>
        <select value={filter} onChange={ changeFilter }>
            <option>wszystkie</option>
            <option>zupa</option>
            <option>danie główne</option>
            <option>deser</option>
            <option>ciasto</option>
        </select>
        <ul>
            { recipes.map(({ title }) => <li key={title}>{title}</li>) }
        </ul>
    </div>
);

export default Recipes;
