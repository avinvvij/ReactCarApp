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