import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  alertData: {
    isShown: false,
    type: 'error',
    label: '',
  },
} as Alert;

const alert = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlertData: (state, action: PayloadAction<AlertData>) => {
      state.alertData = action.payload;
    },
    resetAlert: state => {
      state.alertData = initialState.alertData;
    },
  },
});

export const {setAlertData, resetAlert} = alert.actions;

export default alert.reducer;
