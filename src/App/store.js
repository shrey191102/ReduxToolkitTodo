import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store =configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: true, // Enable Redux DevTools in development mode.
})
