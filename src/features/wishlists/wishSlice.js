import { createSlice } from '@reduxjs/toolkit'

export const wishSlice = createSlice({
  name: 'wishlists',
  initialState: {
    wishlistItems: localStorage.getItem('wishlists') ? JSON.parse(localStorage.getItem('wishlists')) : [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const dishParameters = { ...action.payload }

      const isAlreadyAdded = state.wishlistItems.some(item => item.id === dishParameters.id)

      if (!isAlreadyAdded) {
        state.wishlistItems.push(dishParameters)
      } else {
        alert('Данное блюда уже добавлено в ваш Wishlist')
      }
    },
    removeWishItem: (state, action) => {
      const itemIdToRemove = action.payload

      const updatedWishlist = state.wishlistItems.filter(item => item.id !== itemIdToRemove)

      state.wishlistItems = updatedWishlist
    },
    clearAllWishlist: state => {
      state.wishlistItems = []
    },
  },
})

export const { addToWishlist, removeWishItem, clearAllWishlist } = wishSlice.actions
export default wishSlice.reducer
