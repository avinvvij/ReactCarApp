

export function car_reducer(state=[] , action){
    switch(action.type){
        case 'SEARCH_CARS':
            console.log(action);
            return action.payload;
        default:
            return state;
    }
}