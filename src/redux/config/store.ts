import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux"; // Import combineReducers
import selectItemReducer from "../slices/selectItemSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers to explicitly type the root reducer
const rootReducer = combineReducers({
  selectItem: selectItemReducer, // Make sure this is typed correctly
});

// Apply persistReducer to the combined reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Disabling serializability check for persist actions (PERSIST, REHYDRATE)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST", // Ignore persist action during serialization check
          "persist/REHYDRATE", // Ignore rehydrate action during serialization check
        ],
      },
    }),
});

// Initialize persistor
export const persistor = persistStore(store);

// Typed hooks for useDispatch and useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for better TypeScript support
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
