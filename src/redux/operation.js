import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66bcce3b24da2de7ff6be706.mockapi.io/contacts';

// Cerere pentru a obține toate contactele
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log('Fetched contacts:', response.data); // Adaugă acest log
      return response.data;
    } catch (e) {
      console.error('Fetch contacts error:', e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Cerere pentru a adăuga un contact
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact); // Acesta va deveni https://66bcce3b24da2de7ff6be706.mockapi.io/contacts/contacts
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Cerere pentru a șterge un contact
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`); // Acesta va deveni https://66bcce3b24da2de7ff6be706.mockapi.io/contacts/contacts/{contactId}
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
