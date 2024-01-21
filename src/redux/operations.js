import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://65a955bd219bfa3718690ddd.mockapi.io/api';

export const fetchPage = createAsyncThunk(
  'adverts/fetchPage',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/adverts?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.config.method);
    }
  }
);

export const getByMake = createAsyncThunk(
  'adverts/getByMake',
  async (make, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/adverts?make=${make}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.config.method);
    }
  }
);
