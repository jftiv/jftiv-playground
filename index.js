const axios = require('axios');

async function TestRequest() {
    await axios.get('http://date.jsontest.com/?service=date')
        .then(res => {
            console.log(res.data.url);
            console.log(res.data.explanation);
            return(res);
        })
        .catch(err => {
            console.log("Error: " + err);
        });
};

module.exports = { TestRequest };