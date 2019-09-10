const request = require('request')

var forecast = (lattitude, longitude, callback)=>{
const url = 'https://api.darksky.net/forecast/9370dd02744e8fbc14c7f7d1a11424f1/' + lattitude + ',' + longitude
console.log('lat = ' + lattitude);
console.log('longi = ' + longitude);

request({ url, json:true},(error,{body})=>{
        if (error)
        {
            callback('unable to call the forecast service', undefined)
        }
        else if (body.error)
        {
                console.log(url)
                callback('unable to find the location', undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.');
        }
    }
    )
}

// forecast(-75.7088, 44.1545, (error, data) => {
//    // console.log('Error', error)
//     //console.log('Data', data)
//   })

module.exports = forecast;
