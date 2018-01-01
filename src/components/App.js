import React,{Component} from 'react';

import Search from './search'
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
            </div>
        );
    }
}

export default App;