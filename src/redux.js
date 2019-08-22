import { configureStore, createSlice } from 'redux-starter-kit';
import uuid from 'uuid/v4';

const initialState = {
  id: uuid(),
  alpha3Code: null,
  name: 'No country',
  borders: []
};

const { actions, reducer: countriesReducer } = createSlice({
  slice: 'countries',
  initialState,
  reducers: {
    setCountry(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
    changeAlphaCode(state,action){
      return {
        ...state,
        ...action.payload
      };
    }

  }
});

export const store = configureStore({
  reducer: {
    country: countriesReducer
  }
});

export const { setCountry, changeAlphaCode } = actions;
