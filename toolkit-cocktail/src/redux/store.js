import { configureStore } from '@reduxjs/toolkit'
import CocktailSliceReducer from './features/cocktailSlice'

export default configureStore({
	reducer: {
		app: CocktailSliceReducer
	}
})