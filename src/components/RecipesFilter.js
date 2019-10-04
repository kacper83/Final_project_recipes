import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import Recipes from "../containers/Recipes";

const RecipesApp = () => (
    <Provider store={store}>
        <Recipes />
    </Provider>
);

export default RecipesApp;