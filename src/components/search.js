import React from 'react';
import {Navbar , NavbarBrand , FormGroup , FormControl , Col} from 'react-bootstrap';
class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            search_keyword: ''
        };
    }


    onSearchSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state);
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
                <Navbar inverse>
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
            </div>
        );
    }

}

export default Search;