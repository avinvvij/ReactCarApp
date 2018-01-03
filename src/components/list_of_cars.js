import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class ListOfCars extends Component{

 returnListOfCars = ({car_reducer}) => {
        if(car_reducer){
            return car_reducer.map((car)=>{
                const panel_header = car.brand+" "+car.model;
                const car_url = "/car/"+car.id;
                return(
                <Link to={car_url}>
                    <Panel header={panel_header} key = {car.id} bsStyle="success">
                        {car.description}
                    </Panel>
                </Link>
                )
            })
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }

   

    render(){
        return(
            <div>
                {this.returnListOfCars(this.props)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return {
        car_reducer: state.car_reducer
    }
}

export default connect(mapStateToProps , null)(ListOfCars);