/*
Magic happens here. This is the code you’ve been searching for!!!!
------------------------------------------------------------------
Instead of rendering our app, we need to wrap it into a function and export it.
The function accepts the initial state of the application.

Here’s how it works.

1. Pass initialState to configureStore(). configureStore()returns a new Store instance.
   Hold it inside the store variable.
2. Call renderToString() method, providing our App as input.
   It renders our app on the server and returns the HTML produced.
   Now, the variable content stores the HTML.
3. Get the state out of Redux Store by calling getState() on store.
   Keep it in a variable preloadedState.
4. Return the content and preloadedState.
   We will pass these to our template to get the final HTML page.

* */

import React from 'react'
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'


module.exports = function render(initialState) {
  // 1. Configure the store with the initial state provided
  const store = configureStore(initialState)

  // 2. render the App store static markup ins content variable
  // renders our app on the server and returns the HTML produced
  let content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );

  // Get a copy of store data to create the same store on client side 
  const preloadedState = store.getState()

  return {content, preloadedState};
}
