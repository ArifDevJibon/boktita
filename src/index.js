import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ShowMessage from './Components/ShowMessage';

class App extends React.Component {
    state = { 
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(), 
            hour: null
        };

    componentDidMount() {
        setInterval(() => {
            const currentTime = new Date().toLocaleTimeString();
            const currentDate = new Date().toLocaleDateString();
            const currentHour = new Date().getHours();

            this.setState({ 
                time: currentTime, date: currentDate, hour: currentHour
             });
        }, 1000)



    }










    render() {
        return (
            <div className='container'>
                <span className='time'>{this.state.time}</span>
                <span className='date'>{this.state.date}</span>
                <ShowMessage hour={this.state.hour}/>
            </div>
        )
    }
}






ReactDOM.render(<App />, document.querySelector('#root'));