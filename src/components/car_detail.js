import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getCarDetails} from '../actions';
class CarDetail extends Component{

    componentWillReceiveProps(nextProps){
        console.log(this.props.car_detail_reducer);
    }

    componentWillMount(){
        this.props.getCarDetails(this.props.car_id);
    }


    componentDidMount(){
        //render the car details
        console.log(this.props.car_detail_reducer);
    }

    constructor(props){
        super(props);
        console.log(this.props);
    }

    render(){
        return(
            <div>
                {this.props.car_id}
            </div>
        )
    }

}

function mapStateToProps(state){
    return ({
        car_detail_reducer: state.car_detail_reducer
    });
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getCarDetails: getCarDetails
    } , dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(CarDetail);