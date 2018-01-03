import React from 'react';
import {Navbar , NavbarBrand , FormGroup , FormControl , Carousel , CarouselItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from  'redux';

//importing the actions
import {getCars} from '../actions'
class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            search_keyword: ''
        };
    }


    onSearchSubmit = (event)=>{
        event.preventDefault();
        this.props.getCars(this.state.search_keyword);
    }

     onTextChange = (event)=>{
         console.log(event.target.value);
        this.setState({
            search_keyword: event.target.value
        });
    }

    render(){
        return(
            <div>
                <Navbar inverse className = "navbar-custom">
                    <Navbar.Header>
                        <NavbarBrand>
                            CarApp
                        </NavbarBrand>
                    </Navbar.Header>
                    <Navbar.Form pullRight>
                        <form onSubmit={this.onSearchSubmit}>
                        <FormGroup >
                            <FormControl type='text'  onChange = {this.onTextChange}  placeholder = "Search" />
                        </FormGroup>
                        </form>
                    </Navbar.Form>
                </Navbar>
                <Carousel>
                    <CarouselItem>
                        <img height = {512} width = {1400} src="https://abm-website-assets.s3.amazonaws.com/mbtmag.com/s3fs-public/styles/hero/public/featured_image/2017/05/McLaren72OS.jpg?itok=z5yzxhkv"/>
                    </CarouselItem>
                    <CarouselItem>
                        <img height = {512} width = {1400} src="https://abm-website-assets.s3.amazonaws.com/manufacturing.net/s3fs-public/styles/hero/public/featured_image/2017/09/mclaren%20auto%20racing%20large.jpg?itok=oPUJPY8o"/>
                    </CarouselItem>
                    <CarouselItem>
                        <img height = {512} width = {1400} src="https://abm-website-assets.s3.amazonaws.com/ecnmag.com/s3fs-public/styles/hero/public/featured_image/2016/09/roadway.jpg?itok=7v2ROvsd"/>
                    </CarouselItem>
                </Carousel>
            </div>
        );
    }

}

//function mapStateToProps()


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getCars: getCars
    } , dispatch);
}

export default connect(null , mapDispatchToProps)(Search);