import { configureStore } from '@reduxjs/toolkit'
import wishlistSlice from '../features/wishlists/wishSlice'
import dietSlice from '../features/diets/dietSlice'

export default configureStore({
  reducer: {
    wishlists: wishlistSlice,
    diets: dietSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(store => next => action => {
      const result = next(action)
      if (['wishlists/addToWishlist', 'wishlists/clearAllWishlist', 'wishlists/removeWishItem'].includes(action.type)) {
        localStorage.setItem('wishlists', JSON.stringify(store.getState().wishlists.wishlistItems))
      }
      if (
        ['diets/addToDiet', 'diets/removeDietItem', 'diets/removeDish', 'diets/cleareAllDiet'].includes(action.type)
      ) {
        localStorage.setItem('diets', JSON.stringify(store.getState().diets.dietItems))
      }
      return result
    }),
})
