import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'

import '../assets/style.css';
import '../assets/slick.scss';
import '../assets/slick-theme.scss';

// Create a fresh store 
const store = configureStore()


render(
  <Provider store={store} >
     <App />
  </Provider>,
  document.querySelector('#app')
)
