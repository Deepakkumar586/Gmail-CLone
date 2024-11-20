import {configureStore} from "@reduxjs/toolkit"
import appReducer from './appSlice'
const store = configureStore({
    reducer: {
        // Define your reducers here
        appSlice:appReducer
    }
})
export default store