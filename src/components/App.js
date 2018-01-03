import React,{Component} from 'react';



//components
import Search from './search'
import ListOfCars from './list_of_cars';

class App extends Component{

    componentWillReceiveProps(nextProps){
        return true;
    }

    componentWillMount(){
        console.log("component will mount");
    }

    componentDidMount(){
        console.log("component did mount");
    }

    render(){
        return(
            <div>
                <Search />
                <br />
                <ListOfCars />
            </div>
        );
    }
}

export default App;