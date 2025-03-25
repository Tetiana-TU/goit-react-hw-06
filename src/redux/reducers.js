import { combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice"; // Імпортуємо ред'юсер слайсу контактів
import filtersReducer from "./filtersSlice"; // Імпортуємо ред'юсер слайсу фільтрів

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

export default rootReducer;
