/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import npmmAPI from '../services/npmmAPI';

export const getCollections = createAsyncThunk(
  'collectionList/getCollections',
  async () => {
    const response = await npmmAPI.getCollections();
    return response;
  }
);

export const updateCollection = createAsyncThunk(
  'collectionList/updateCollection',
  async (collection) => {
    const response = await npmmAPI.updateCollection(
      collection.id,
      collection.name
    );
    return response;
  }
);

export const createCollection = createAsyncThunk(
  'collectionList/createCollection',
  async (name) => {
    const response = await npmmAPI.createCollection(name);
    return response;
  }
);

export const deleteCollection = createAsyncThunk(
  'collectionList/deleteCollection',
  async (id) => {
    const response = await npmmAPI.deleteCollection(id);
    return response;
  }
);

export const collectionListSlice = createSlice({
  name: 'collectionList',
  initialState: {
    collections: [],
    loading: null,
  },
  reducers: {
    clearCollections: (state) => {
      state.collections = [];
    },
  },
  extraReducers: {
    [getCollections.pending]: (state) => {
      state.loading = 'pending';
    },
    [getCollections.fulfilled]: (state, action) => {
      state.collections = action.payload;
      state.loading = 'idle';
    },
    [getCollections.rejected]: (state) => {
      state.loading = 'rejected';
    },
    [updateCollection.fulfilled]: (state, action) => {
      state.collections = state.collections.map((collection) => {
        if (collection.id === action.payload.id) {
          return action.payload;
        }
        return collection;
      });
    },
    [createCollection.fulfilled]: (state, action) => {
      state.collections.push(action.payload);
    },
    [deleteCollection.fulfilled]: (state, action) => {
      state.collections = state.collections.filter(
        (collection) => collection.id !== Number(action.payload)
      );
    },
  },
});

const { actions } = collectionListSlice;

export const { clearCollections } = actions;

export default collectionListSlice.reducer;
