import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter , Route} from 'react-router-dom';


//components
import App from './components/App';
import Car from './components/Car';

ReactDom.render(
<BrowserRouter>
    <div>
        <Route exact path ='/' component={App}></Route>
        <Route exact path='/car/:id' component={Car}></Route>
    </div>
</BrowserRouter> , document.getElementById('root'));