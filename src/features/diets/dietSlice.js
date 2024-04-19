import { createSlice } from '@reduxjs/toolkit'

export const dietSlice = createSlice({
  name: 'diets',
  initialState: {
    dietItems: localStorage.getItem('diets') ? JSON.parse(localStorage.getItem('diets')) : [],
  },
  reducers: {
    addToDiet: (state, action) => {
      const dishParameters = { ...action.payload }

      const foundDietItem = state.dietItems?.find(item => item?.id === dishParameters.id)

      if (foundDietItem) {
        foundDietItem.count++
      } else {
        state.dietItems?.push({ ...dishParameters, count: 1 })
      }
    },
    removeDietItem: (state, action) => {
      const itemIdToRemove = action.payload

      const updatedDish = state.dietItems?.find(item => item?.id === itemIdToRemove.id)

      if (updatedDish && updatedDish.count > 1) {
        updatedDish.count--
      } else {
        state.dietItems = state.dietItems?.filter(item => item?.id !== itemIdToRemove.id)
      }
    },
    removeDish: (state, action) => {
      const dishToRemove = action.payload

      state.dietItems = state.dietItems?.filter(item => item?.id !== dishToRemove)
    },
    cleareAllDiet: state => {
      state.dietItems = []
    },
  },
})

export const { addToDiet, removeDietItem, removeDish, cleareAllDiet } = dietSlice.actions
export default dietSlice.reducer
