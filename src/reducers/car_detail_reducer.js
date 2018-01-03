export function car_detail_reducer(state = [] , action){
    switch(action.type){
        case 'CAR_DETAIL':
            console.log(action.payload);
            return action.payload;
        default :
            return state;
    }
}