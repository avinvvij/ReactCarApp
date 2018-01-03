const Server_Url = "http://localhost:3004/carsIndex";

export function getCars(keywords){

const request = fetch(
    Server_Url+"?q="+keywords,
    {
        method:'GET'
    }
).then(response => response.json());

    return{
        type: 'SEARCH_CARS',
        payload: request
    }
}


export function getCarDetails(car_id){
    const request = fetch(
    Server_Url+"?id="+car_id,
    {
        method:'GET'
    }
).then(response => response.json());

    return{
        type: 'CAR_DETAIL',
        payload: request
    }
}