import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyDrmsIalhVnS_Ub7HYZKgklTR8vb-uzcFI';
//Create a new component. This component should produce some HTML

//const declares a variable but this is hte final value of the variable, considered a constant and will not be reassigned. Error = App = 5
// const App = () => {
//     return (
//         <div>
//             <SearchBar/>
//         </div>
//     )
// }

class App extends Component{
    constructor(props){
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
            this.setState({videos});
            //this.setState({videos : videos})
        });
    }



    render(){
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

//Take this component's generated HTML and put it on the page. In the DOM

ReactDOM.render(<App/>, document.querySelector('.container'));
