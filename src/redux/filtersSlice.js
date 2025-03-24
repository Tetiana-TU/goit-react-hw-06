import { createSlice } from "@reduxjs/toolkit";

// Початковий стан для фільтрів
const initialState = {
  name: "", // Зберігаємо значення фільтра по імені
};

const filtersSlice = createSlice({
  name: "filters", // Назва слайса
  initialState, // Початковий стан
  reducers: {
    // Екшен для зміни фільтра
    changeFilter: (state, action) => {
      state.name = action.payload; // Оновлюємо значення фільтра
    },
  },
});

// Експортуємо екшен changeFilter та редюсер
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
