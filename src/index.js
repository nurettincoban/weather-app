import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from './configs/theme';
import GlobalStyles from './styles/GlobalStyles';
import 'weather-icons/css/weather-icons.css';
import { loadState, saveState } from './helpers/cacheState';

const persistedState = loadState();

const store = createStore(
	rootReducer,
	persistedState,
	composeWithDevTools(
		applyMiddleware(reduxPromise, thunk)
	)
);

store.subscribe(() => {
	saveState({
		weather: store.getState().weather
	});
});

ReactDOM.render(
	<Provider store={store}>
		<Normalize/>
		<GlobalStyles theme={theme}/>
		<ThemeProvider theme={theme}>
			<AppContainer />
		</ThemeProvider>
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
