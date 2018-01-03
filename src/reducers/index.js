import {combineReducers} from 'redux';

//reducers
import {car_reducer} from './cars_reducers';
import {car_detail_reducer} from './car_detail_reducer'

const combineAllReducers = combineReducers({
    car_reducer: car_reducer,
    car_detail_reducer: car_detail_reducer
});

export default combineAllReducers;