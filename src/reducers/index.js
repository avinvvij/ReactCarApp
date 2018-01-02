import {combineReducers} from 'redux';

//reducers
import {car_reducer} from './cars_reducers';

const combineAllReducers = combineReducers({
    car_reducer: car_reducer
});

export default combineAllReducers;