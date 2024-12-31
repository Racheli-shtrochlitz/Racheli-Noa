import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    arr: [{id:0,name:" מרק חלבי מוקרם",time:"1 שעה",category:"חלבי",like:false,star:4},
        {id:1,name:"לחם כפרי ",time:"3 שעות",category:"פרווה",like:false,star:1},
        {id:2,name:" עוף בסילאן",time:"1 שעה",category:"בשרי",like:false,star:3},
        {id:3,name:"סלט רימונים",time:" 10 דקות",category:"בשרי",like:false,star:5},
        {id:4,name:" שייק פירות מרענן",time:"3 שעות",category:"פרווה",like:false,star:4},
        {id:5,name:"סלט רימונים",time:" 10 דקות",category:"פרווה",like:false,star:2}]
}

const recipeListSlice = createSlice({
    name: "RecipesArr",
    initialState: initialValue,
    reducers: {
        AddRecipe: (state, actions) => {
            state.arr.push(actions.payload )  
        },
        ChangeLike: (state, actions) => {
            state.arr[actions.payload.index].like=actions.payload.isLiked 
            console.log(state.arr[0].like)
        }
    }

})

export const {AddRecipe,ChangeLike} = recipeListSlice.actions
export default recipeListSlice.reducer