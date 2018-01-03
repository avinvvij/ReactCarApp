import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter , Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware , compose} from 'redux';
import ThunkMiddleWare from 'redux-thunk';
import PromiseMiddleware from 'redux-promise';

//components
import App from './components/App';
import Car from './components/Car';

//reducers
import reducers from './reducers';

const createAppStore = compose(
    applyMiddleware(ThunkMiddleWare , PromiseMiddleware)
)(createStore);

export function configureStore(initialState){
    const store = createAppStore( reducers , initialState);
    return store;
}

const store = configureStore();

ReactDom.render(
<Provider store= {store}>
    <BrowserRouter>
        <div>
            <Route exact path ='/' component={App}></Route>
            <Route exact path='/car/:id' component={Car}></Route>
        </div>
    </BrowserRouter>
</Provider> , document.getElementById('root'));