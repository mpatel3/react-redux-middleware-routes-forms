import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
    
    renderWeather = (cityData) => {
        const Tempratures = cityData.list.map(weather => weather.main.temp);
        const Pressures = cityData.list.map(weather => weather.main.pressure);
        const Humidities = cityData.list.map(weather => weather.main.humidity);
        const {lat, lon} = cityData.city.coord;
        return (
            <tr key={cityData.city.id}>
                <td> <GoogleMap lat={lat} lon={lon} /></td>
                <td> <Chart data={Tempratures} color='orange' units="K" /> </td>
                <td> <Chart data={Pressures} color='green' units="hPa"/> </td>
                <td> <Chart data={Humidities} color='black' units="%" /> </td>
            </tr>
        )
    }

    render() {
        console.log(this.props.weather);
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({weather}) => {
    // const weather = state.weather
    return { weather }
}

export default  connect(mapStateToProps)(WeatherList);