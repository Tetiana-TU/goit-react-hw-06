import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // використовуємо localStorage
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import { combineReducers } from "redux"; // імпортуємо combineReducers

// Конфігурація для persist
const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"], // зберігаємо тільки масив контактів
};

// Створюємо persistedContactsReducer за допомогою persistReducer
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// Комбінуємо ред'юсери
const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filters: filtersReducer,
});

// Створюємо store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      }, // Використовуємо rootReducer
    }),
});
// Створюємо persistor для використання з PersistGate
const persistor = persistStore(store);

export { store, persistor };
