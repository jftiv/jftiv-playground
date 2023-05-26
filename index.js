const axios = require('axios');

async function TestRequest() {
    let response = await axios.get('http://date.jsontest.com/?service=date');
    let statusCode = response.status;
    let date = response.data.date;
    let time = response.data.time;
    
    console.log(`Status: ${statusCode},\nDate: ${date},\nTime: ${time}`);
};

module.exports = { TestRequest };