import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    arr: [{id:0,name:"לחם כפרי",time:"1 שעה",category:"חלבי",like:false,star:4,image:"1"},
        {id:1,name:"לחם כפרי ",time:"3 שעות",category:"פרווה",like:false,star:1,image:"1"},
        {id:2,name:" עוף בסילאן",time:"1 שעה",category:"בשרי",like:false,star:3,image:"1"},
        {id:3,name:"סלט רימונים",time:" 10 דקות",category:"בשרי",like:false,star:5,image:"1"},
        {id:4,name:" שייק פירות מרענן",time:"3 שעות",category:"פרווה",like:false,star:4,image:"1"},
        {id:5,name:"סלט רימונים",time:" 10 דקות",category:"פרווה",like:false,star:2,image:"1"},
        {id:6,name:"לחם כפרי",time:"1 שעה",category:"חלבי",like:false,star:4,image:"1"},
        {id:7,name:"לחם כפרי ",time:"3 שעות",category:"פרווה",like:false,star:1,image:"1"},
        {id:8,name:" עוף בסילאן",time:"1 שעה",category:"בשרי",like:false,star:3,image:"1"},
        {id:9,name:"סלט רימונים",time:" 10 דקות",category:"בשרי",like:false,star:5,image:"1"},
        {id:10,name:" שייק פירות מרענן",time:"3 שעות",category:"פרווה",like:false,star:4,image:"1"},
        {id:5,name:"סלט רימונים",time:" 10 דקות",category:"פרווה",like:false,star:2,image:"1"},
        {id:0,name:"לחם כפרי",time:"1 שעה",category:"חלבי",like:false,star:4,image:"1"},
        {id:1,name:"לחם כפרי ",time:"3 שעות",category:"פרווה",like:false,star:1,image:"1"},
        {id:2,name:" עוף בסילאן",time:"1 שעה",category:"בשרי",like:false,star:3,image:"1"},
        {id:3,name:"סלט רימונים",time:" 10 דקות",category:"בשרי",like:false,star:5,image:"1"},
        {id:4,name:" שייק פירות מרענן",time:"3 שעות",category:"פרווה",like:false,star:4,image:"1"},
        {id:5,name:"סלט רימונים",time:" 10 דקות",category:"פרווה",like:false,star:2,image:"1"}]
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