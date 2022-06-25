import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice';
import ticketReducer from '../features/ticketSlice';
import noteReducer from '../features/noteSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tickets: ticketReducer,
        notes: noteReducer
    }
})