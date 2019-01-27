import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Time from './Components/Time';
import ShowQuotes from './Components/ShowQuotes';

class App extends React.Component {



    render() {
        return (
            <div className='container'>
                <Time />
                <ShowQuotes />
            </div>
        )
    }
}






ReactDOM.render(<App />, document.querySelector('#root'));