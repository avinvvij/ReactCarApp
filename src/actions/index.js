const Server_Url = "http://localhost:3304/carsIndex";

export function getCars(keywords){

const request = fetch(
    Server_Url+"?q="+keywords,
    {
        method:'GET'
    }
).then(response => console.log(response));

    return{
        type: 'SEARCH_CARS',
        payload: request
    }
    console.log(keywords);
}