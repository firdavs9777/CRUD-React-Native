import React, { useReducer } from 'react';
import { Text } from 'react-native';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    callback();
  };
};
const deletePost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};
const editPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editPost, deletePost },
  [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
);
