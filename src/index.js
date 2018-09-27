import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import {fetchPosts} from './action/postActions';


store.dispatch(fetchPosts())
console.log(store.getState().posts);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
