import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import configureStore from 'store/configureStore';
import { Home, Game, Final } from 'pages';

import themes from './styles/themes';
import GlobalStyle from './styles/GlobalStyles';

const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />
        <Router basename="/millionaire">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/final">
            <Final />
          </Route>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
