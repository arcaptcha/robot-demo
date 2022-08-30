const axios = require('axios');


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function makeRequset() {
    axios.post('http://localhost:3000/signup', {
        username: `${makeid(8)}@gmail.com`,
        password: `${makeid(8)}`
    }).then(makeRequset)
}


makeRequset();
