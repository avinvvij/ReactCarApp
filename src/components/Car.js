import React from 'react';


//Car Detail Component
import CarDetail from './car_detail';
class Car extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <div>
                <CarDetail car_id = {this.props.match.params.id} />
            </div>
        );
    }
}

export default Car;