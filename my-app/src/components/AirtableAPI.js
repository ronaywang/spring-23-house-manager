var Airtable = require('airtable');
//create a new Airtable object in React 
new Airtable({apiKey:'keyWXBX6EWJI83bal'}).base('appxk50hiFHmnhcsi');
//base endpoint to call with each request
axios.defaults.baseURL =   'https://api.airtable.com/v0/appxk50hiFHmnhcsi/data/';
//content type to send with all POST requests 
axios.defaults.headers.post['Content-Type'] = 'application/json';
//authenticate to the base with the API key 
axios.defaults.headers['Authorization'] = 'Bearer keyWXBX6EWJI83bal';

