
const request = require('request');


var geocodeAddress = (address, callback) =>
{

    var encodedAddress = encodeURIComponent(address)

    // request({
    //     url: `http://www.mapquestapi.com/geocoding/v1/address?key=AexPLecrGGrrsDo2WlRoK1pMGTKv7yDg&location=${encodedAddress}`,
    //     json : true
    // },
    // (error, response, body) => {
    //         console.log('latbaby ' + body.results[0].locations[0].latLng.lat);
    //         console.log('long baby ' + body.results[0].locations[0].latLng.lng);
    //     }
    // );

    request({
        //url : 'http://www.mapquestapi.com/geocoding/v1/address?key=AexPLecrGGrrsDo2WlRoK1pMGTKv7yDg&location=37953%20essanay%20pl%20california',
        url : `http://www.mapquestapi.com/geocoding/v1/address?key=AexPLecrGGrrsDo2WlRoK1pMGTKv7yDg&location=${encodedAddress}`,
    
        json : true
    },(error, response,body) =>{
    console.log('prining body');
    //console.log(JSON.stringify(response, undefined, 2));
    console.log("error = " + error);
    if (error) {
        callback('Unable to connect to Mapquest servers');
    } else if (body == undefined)
    {
        callback('unable to find address');            
    } else if (body.info.statuscode === 0)
    {
        callback(undefined,{
             Lattitude : body.results[0].locations[0].latLng.lat,
             Longitude : body.results[0].locations[0].latLng.lng,
             address: address   
        });
         console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
         console.log(`longitude: ${body.results[0].locations[0].latLng.lng}`);
      }
    });
}

/*function geocodeAddress(address) {
    var encodedAddress = encodeURIComponent(address); 

    request({
        //url : 'http://www.mapquestapi.com/geocoding/v1/address?key=AexPLecrGGrrsDo2WlRoK1pMGTKv7yDg&location=37953%20essanay%20pl%20california',
        url : `http://www.mapquestapi.com/geocoding/v1/address?key=AexPLecrGGrrsDo2WlRoK1pMGTKv7yDg&location=${encodedAddress}`,
    
        json : true
    },(error, response,body) =>{
    console.log('prining body');
    //console.log(JSON.stringify(response, undefined, 2));
    console.log("error = " + error);
    if (error) {
        console.log('Unable to connect to Mapquest servers');
    }
    else if (body == undefined)
        {
            console.log('unable to find the address');
        }
        else if (body.info.statuscode === 0)
    {
        console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
        console.log(`longitude: ${body.results[0].locations[0].latLng.lng}`);
    }
    });
}*/

module.exports = geocodeAddress;

