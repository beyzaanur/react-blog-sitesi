import { createSlice } from '@reduxjs/toolkit';
import blogData from './BlogList'; 

const blogSlice = createSlice({
  name: 'blogs',
  initialState: blogData, 
  reducers: {
    addBlog: (state, action) => {
      state.push(action.payload); 
    },
    deleteBlog: (state, action) => {
      return state.filter(blog => blog.id !== action.payload); 
    },
    editBlog: (state, action) => {
      const { id, updatedBlog } = action.payload;
      const index = state.findIndex(blog => blog.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedBlog };
      }
    }
  }
});

export const { addBlog, deleteBlog, editBlog } = blogSlice.actions;
export default blogSlice.reducer;



