import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';

class ListOfCars extends Component{

 returnListOfCars = ({car_reducer}) => {
        if(car_reducer){
            return car_reducer.map((car)=>{
                const panel_header = car.brand+" "+car.model;
                return(
                <Panel header={panel_header} key = {car.id} bsStyle="success">
                    {car.description}
                </Panel>
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