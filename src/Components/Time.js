import React from 'react';
import ShowMessage from './ShowMessage';
import './Time.css';

class Time extends React.Component {
    state = {
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
        hour: null,
        min: null
    };

    componentDidMount() {
        setInterval(() => {
            const currentTime = new Date().toLocaleTimeString();
            const currentDate = new Date().toLocaleDateString();
            const currentHour = new Date().getHours();
            const currentMin = new Date().getMinutes();

            this.setState({
                time: currentTime, date: currentDate,
                hour: currentHour, min: currentMin
            });
        }, 1000)

    }

    render() {
        return (
            <div>
                <ShowMessage hour={this.state.hour} min={this.state.min} /> 
                <span className='time'>{this.state.time}</span>
                <span className='date'>{this.state.date}</span>
            </div>
        )
    }
}

export default Time;