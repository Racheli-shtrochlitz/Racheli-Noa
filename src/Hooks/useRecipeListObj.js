import { useSelector } from "react-redux";

const useRecipeListObj = () => useSelector(state => state.RecipeListSlice);
export default useRecipeListObj