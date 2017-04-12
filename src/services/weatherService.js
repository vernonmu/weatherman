import axios from "axios";

import store from "../store";

import {
	  formatWeatherData
	, buildUrl
} from "../utils/weatherUtils";
import { setWeather } from "../ducks/weather";

export function getWeather( location ) {
	console.log(location)
	const weatherPromise = axios.get( buildUrl( location ) )
		.then( response => {
			console.log( response );

			const formattedData = formatWeatherData( response.data );
			console.log( formattedData );

			return formattedData;
		} );

	store.dispatch( setWeather( weatherPromise ) );
}
