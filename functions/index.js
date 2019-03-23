const functions = require('firebase-functions');
const fetch = require('fetch');
const axios = require('axios');


handleResponse = (axResponse, response) => {

	response.send(axResponse.data);
}

handleError = (error) => {
	console.log(error);
	throw error;
}

const url = 'https://in.bookmyshow.com/sports/ipl-mumbai-indians/ET00097338';

const options = {
  host: 'eternagame.wikia.com',
  path: '/sports/ipl-mumbai-indians/ET00097338'
};

const urlOptions = {
  /*transformResponse: [(data) => {
  	console.log(typeof data); 
  }],*/
  responseType: 'blob'
};


exports.fetchBmsPage = functions.https.onRequest((request, response) => {
	// axios.get(url)
	axios(url, urlOptions)
		.then( (axResponse) => handleResponse(axResponse, response))
		.catch( handleError );
	
});