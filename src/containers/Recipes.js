import { connect } from "react-redux";
import Recipes from "../components/Recipe/Recipes";
import {changeFilter} from "../redux/actions";


const mapState = ({ recipes: { filter, list }}) => ({
    filter: filter,
    recipes: filter === "all" ? list : list.filter(({ category }) => category === filter)
});

const mapDispatch = (dispatch) => ({
    changeFilter: (event) => dispatch(changeFilter(event.target.value))
});

export default connect(mapState, mapDispatch)(Recipes);